export const commonString = `
/**
 * 公共方法可单独放置
 */
// common start
function safeConvert(source: any, conditions: ConditionItem[]) {
  const res: any = {};
  for (const con of conditions) {
    let value = source?.[con.label];
    if (con.type === 'Array') {
        const val: any[] = [];
        if (!(value instanceof Array)) {
            value = [];
        } 
        for (const item of value) {
            val.push(con.convert(item))
        }
        res[con.label] = val;
    } else {
        res[con.label] = con.convert(value)
    }
  }
  return res;
}


interface ConditionItem {
  label: string;
  type: string;
  convert: (val: any, defaultVal?: any) => any;
}
// common end
`;
export const convertFnString = `
export function {0}(value?: any): {1} {
    const conditions:ConditionItem[] = [
      {2}
    ];
    return safeConvert(value, conditions);
  }
`;

export const interfaceString = `
export interface {0} {
{1}
}
`;

export const conditionTpl = `{
   label: "{0}",
   type: "{1}",
   convert: {2} 
 }`;

export function isDefaultTpl(b?: boolean) {
  if (b) {
    return "(val: any, defaultVal = {0}) => val ?? defaultVal";
  }
  return "(val: any) => {0}";
}
