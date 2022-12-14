import Validator from "./abstractValidator";

class BooleanValidator extends Validator
{
    constructor(data: any)
    {
        if (typeof(data) === 'boolean')
        {
            super(data);
        }
        else
        {
            throw new Error("O tipo está errado");
        }
    }
}

export default BooleanValidator;