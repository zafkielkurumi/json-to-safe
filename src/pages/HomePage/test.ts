export interface TestArr1 {
  a: number;
}

export interface User {
  id: string;
  name: string;
  account: string;
  mail_address: string;
  is_premium: boolean;
  x_restrict: number;
  is_mail_authorized: boolean;
  require_policy_agreement: boolean;
}

export interface Response {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export interface Welcome {
  access_token: string;
  expires_in: string;
  token_type: string;
  scope: string;
  refresh_token: string;
  testArr: string[];
  testArr1: TestArr1[];
  user: User;
  response: Response;
}

/**
 * 公共方法可单独放置
 */
// common start
function safeConvert(source: any, conditions: ConditionItem[]) {
  const res: any = {};
  for (const con of conditions) {
    let value = source?.[con.label];
    if (con.type === "Array") {
      const val: any[] = [];
      if (!(value instanceof Array)) {
        value = [];
      }
      for (const item of value) {
        val.push(con.convert(item));
      }
      res[con.label] = val;
    } else {
      res[con.label] = con.convert(value);
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

export function testArr1(value?: any): TestArr1 {
  const conditions: ConditionItem[] = [
    {
      label: "a",
      type: "Number",
      convert: (val: any, defaultVal = 0) => val ?? defaultVal,
    },
  ];
  return safeConvert(value, conditions);
}

export function user(value?: any): User {
  const conditions: ConditionItem[] = [
    {
      label: "id",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "name",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "account",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "mail_address",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "is_premium",
      type: "Boolean",
      convert: (val: any, defaultVal = true) => val ?? defaultVal,
    },
    {
      label: "x_restrict",
      type: "Number",
      convert: (val: any, defaultVal = 0) => val ?? defaultVal,
    },
    {
      label: "is_mail_authorized",
      type: "Boolean",
      convert: (val: any, defaultVal = true) => val ?? defaultVal,
    },
    {
      label: "require_policy_agreement",
      type: "Boolean",
      convert: (val: any, defaultVal = true) => val ?? defaultVal,
    },
  ];
  return safeConvert(value, conditions);
}

export function response(value?: any): Response {
  const conditions: ConditionItem[] = [
    {
      label: "access_token",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "expires_in",
      type: "Number",
      convert: (val: any, defaultVal = 0) => val ?? defaultVal,
    },
    {
      label: "token_type",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "scope",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "refresh_token",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
  ];
  return safeConvert(value, conditions);
}

export function welcome(value?: any): Welcome {
  const conditions: ConditionItem[] = [
    {
      label: "access_token",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "expires_in",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "token_type",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "scope",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "refresh_token",
      type: "String",
      convert: (val: any, defaultVal = "") => val ?? defaultVal,
    },
    {
      label: "testArr",
      type: "Array",
      convert: (val: any, defaultVal = []) => val ?? defaultVal,
    },
    {
      label: "testArr1",
      type: "Array",
      convert: (val: any) => testArr1(val),
    },
    {
      label: "user",
      type: "Object",
      convert: (val: any) => user(val),
    },
    {
      label: "response",
      type: "Object",
      convert: (val: any) => response(val),
    },
  ];
  return safeConvert(value, conditions);
}
