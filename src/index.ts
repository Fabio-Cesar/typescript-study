class Validator
{
    protected _data: string | number | boolean;

    constructor(data: any) {
        this._data = data;
    }
}

class NumberValidator extends Validator
{
    constructor(data: any) {
        if (typeof(data) === 'number') {
            super(data);
            console.log(this._data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class StringValidator extends Validator
{
    constructor(data: any) {
        if (typeof(data) === 'string') {
            super(data);
            console.log(this._data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator
{
    constructor(data: any) {
        if (typeof(data) === 'boolean') {
            super(data);
            console.log(this._data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

const data = new Validator('funciona');
const data2 = new Validator(true);
const data3 = new Validator(1233);

const number3 = new NumberValidator(1234);

const string1 = new StringValidator('funciona');

const boolean2 = new BooleanValidator(true);

const error = new NumberValidator('naofunciona');