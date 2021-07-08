import { defineComponent } from "vue"
import { commonString, conditionTpl, convertFnString, interfaceString, isDefaultTpl} from '@/constants';
import { anyObject } from "@/models";
import { convertType, isArray, isBoolean, isNumber, isObject, isString } from "@/utils/types";
import { camelize, classify } from "@/utils/strings";
import { StringBuffer } from "@/utils/String";
import { welcome } from './test';

const str = ` {
  "access_token": "sdfsdfsd",
  "expires_in": "3600",
  "token_type": "bearer",
  "scope": "",
  "refresh_token": "fwerfwefwefs",
  "testArr":["1"],
  "testArr1":[{"a": 1}],
  "user": {
    "id": "werwe",
    "name": "fdsfsd",
    "account":"fdsfsd",
    "mail_address": "fsdfsdfdsfs@gmail.com",
    "is_premium": false,
    "x_restrict": 2,
    "is_mail_authorized": true,
    "require_policy_agreement": false
  },
  "response": {
    "access_token": "fsdfsdfsd",
    "expires_in": 3600,
    "token_type": "bearer",
    "scope": "",
    "refresh_token": "fsdfsdfsd"

  }
}`;
console.log(welcome(JSON.parse(str)))

interface ConfigData {
  label: string; // 名称可修改
  // value: any;
  jsonKey: string;
  type: string;
  tsType: string;
  isNull: boolean;
  props: ConfigData[];
  deep: number;
  comment: string; // 注释
  itemType?: string;
  default?: any; // 默认值
}

interface Data {
  inputString: string,
  configData: ConfigData | null;
  outString: string,
  outConvertString: string,
  fnChecked: boolean
}

export default defineComponent({
  name: 'HomePage',
  data(): Data {
    return {
      inputString: str,
      configData: null,
      outString: '',
      outConvertString: '',
      fnChecked: false
    }
  },
  methods: {
    tranferType(configData: ConfigData) {
      if (isArray(configData.type)) {
        const str = new Array(configData.deep).fill('[]').join('');

        return (isObject(configData.props[0]?.type) ? classify(configData.itemType!) : camelize(configData.itemType!)) + str 
      }
      return configData.type;
    },
    formateJson() {
      this.inputString =  JSON.stringify(JSON.parse(this.inputString), null, 2);
      this.configData = this.toConfigJson(JSON.parse(this.inputString));
    },
    generate() {
      this.outString = '';
     
      if (this.configData) {
        this.generateInterface(this.configData);
        if (this.fnChecked) {
          this.outConvertString = commonString;
          this.generateConvert(this.configData);
        }
        navigator.clipboard.writeText(this.outString + this.outConvertString).then(r => {
          console.log('success')
        });
      }
    },
    // 将json转换为可配置的数据
    toConfigJson(json: anyObject | [], label = "Welcome", deep = 1): ConfigData {
      const type = convertType(json);
      const config: ConfigData = {
        label,
        jsonKey: label,
        type,
        tsType: camelize(type),
        props: [],
        isNull: false,
        deep: deep,
        comment: '',
        
      };
      if (isArray(type)) {
        const arrConfig = this.mergeArray(json as [], deep, config);
        if (isObject(arrConfig.type)) {
          config.props.push(arrConfig)
        }
      }
      
      if (isObject(type)) {
        config.tsType = classify(config.label);
        for (const key in json) {
          if (json.hasOwnProperty(key)) {
            const val = json[key];
            const type = convertType(val);
            if (isObject(type) || isArray(type)) {
              config.props.push(this.toConfigJson(val, key));
            } else {
              config.props.push({
                label: key,
                type,
                props: [],
                isNull: false,
                deep: deep,
                comment: '',
                jsonKey: key,
                tsType: camelize(type),
              });
            }
          }
        }
      }
      return config;
    },
    // 对数组进行合并
    mergeArray(arr: any[], deep = 1, parentConfig: ConfigData) {
      const first = arr[0];
      const type = convertType(first);
      let config: ConfigData;
      if (isArray(type)) {
        config = this.mergeArray(first, deep + 1, parentConfig);
      } else if (isObject(type)) {
        // 循环所有合并属性
        let res = {};
        for (const item of arr) {
          res = {
            ...res,
            ...item,
          };
        }
        if (parentConfig) {
          parentConfig.deep = deep;
          parentConfig.itemType = classify(parentConfig.label)
        }
        config = this.toConfigJson(res, parentConfig.label);
      } else {
        config = {
          label: '',
          type,
          props: [],
          isNull: false,
          deep: deep,
          comment: '',
          jsonKey: '',
          tsType: camelize(type),
        };
        if (parentConfig) {
          parentConfig.deep = deep;
          parentConfig.itemType =  camelize(type)
        }
      }

      return config;
    },
    //
    generateInterface(configData: ConfigData) {
      const stringBuffer = new StringBuffer();
      let str = interfaceString.replace('{0}', classify(configData.label));
      for (const prop of configData.props) { 
        if (prop.comment) {
          stringBuffer.append(`/** ${prop.comment} */`)
          stringBuffer.newLine();
        }
        if (isObject(prop.type)) {
          stringBuffer.append(`${prop.label}: ${classify(prop.label)}`)
          this.generateInterface(prop);
        }
        if (isArray(prop.type)) {
          stringBuffer.append(`${prop.label}: ${prop.itemType}${new Array(prop.deep).fill('[]').join()}`)
          if (prop.props.length) {
            this.generateInterface(prop.props[0]);
          }
        }
        if (isString(prop.type)) {
          stringBuffer.append(`${prop.label}: string`)
        }
        if (isNumber(prop.type)) {
          stringBuffer.append(`${prop.label}: number`)
        }

        if (isBoolean(prop.type)) {
          stringBuffer.append(`${prop.label}: boolean`)
        }
      
        stringBuffer.append(',');
        stringBuffer.newLine();
      }
      this.outString += str.replace('{1}', stringBuffer.value())
    },
    //
    generateConvert(configData: ConfigData) {
      let str = convertFnString.replace('{0}', camelize(configData.label));
      str = str.replace('{1}', classify(configData.label));
      const stringBUffer = new StringBuffer();
      
      for (const prop of configData.props) { 
        let conditionStr = conditionTpl.replace('{0}', prop.label);
        if(isObject(prop.type)) {
          conditionStr = conditionStr.replace('{1}', 'Object');
          conditionStr = conditionStr.replace('{2}', isDefaultTpl().replace('{0}', `${camelize(prop.label)}(val)`));
          this.generateConvert(prop);
        } 
        if (isArray(prop.type)) {
          conditionStr = conditionStr.replace('{1}', 'Array');
          // TODO(KURUMI): 多维数组,目前1级
         
          if(prop.props.length) {
            conditionStr = conditionStr.replace('{2}', isDefaultTpl().replace('{0}', `${camelize(prop.label)}(val)`));
            this.generateConvert(prop.props[0]);
          } else {
            conditionStr = conditionStr.replace('{2}', isDefaultTpl(true).replace('{0}', `[]`))
          }
          
        }
        if (isString(prop.type)) {
          conditionStr = conditionStr.replace('{1}', 'String');
          conditionStr = conditionStr.replace('{2}', isDefaultTpl(true).replace('{0}', `''`))
        }
        if (isNumber(prop.type)) {
          conditionStr = conditionStr.replace('{1}', 'Number');
          conditionStr = conditionStr.replace('{2}', isDefaultTpl(true).replace('{0}', '0'))
        }

        if (isBoolean(prop.type)) {
          conditionStr = conditionStr.replace('{1}', 'Boolean');
          conditionStr = conditionStr.replace('{2}', isDefaultTpl(true).replace('{0}', 'true'))
        }
        stringBUffer.append(conditionStr);
        stringBUffer.append(',');
      }
      stringBUffer.newLine();
      str = str.replace('{2}', stringBUffer.value());
      this.outConvertString += str;
    }
  },
  // 
})