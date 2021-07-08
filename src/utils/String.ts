export class StringBuffer {
    private _str = '';
    constructor(val?: string) {
        this._str = val ?? '';
    }

    append(val: string) {
        this._str += val;
    }

    newLine() {
        this._str += '\n'
    }

    addBlank(count: number = 2) {
        this._str +=  new Array(count).fill(' ').join(''); 
    }

    value() {
        return this._str;
    }
}