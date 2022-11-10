import Validator from "./abstractValidator";

class NumberValidator extends Validator
{
    constructor(data: any)
    {
        if (typeof(data) === 'number')
        {
            super(data);
        }
        else
        {
            throw new Error("O tipo está errado");
        }
    }
}

export default NumberValidator;