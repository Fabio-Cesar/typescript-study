import Validator from "./abstractValidator";

class StringValidator extends Validator
{
    constructor(data: any)
    {
        if (typeof(data) === 'string')
        {
            super(data);
        }
        else
        {
            throw new Error("O tipo está errado");
        }
    }
}

export default StringValidator;