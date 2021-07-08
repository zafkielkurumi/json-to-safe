

export function convertType(value: any) {
   const res = Object.prototype.toString.call(value);
   const reg = /\[object[\s]*([A-Za-z]+)\]/;
   const matchs = res.match(reg);
   if (matchs) {
       return matchs[1]
   }
   return ''
}

export function isObject(val: string) {
    return val === 'Object'
}

export function isString(val: string) {
    return val === 'String'
}

export function isNull(val: string) {
    return val === 'Null'
}

export function isNumber(val: string) {
    return val === 'Number'
}

export function isArray(val: string) {
    return val === 'Array'
}

export function isBoolean(val: string) {
    return val === 'Boolean'
}