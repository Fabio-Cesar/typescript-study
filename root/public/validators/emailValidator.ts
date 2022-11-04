import StringValidator from "./stringValidator.js";

class EmailValidator extends StringValidator
{
    constructor (data: any)
    {
        super(data);
        const regex = new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/, "im");
        if (!regex.test(data))
        {
            throw new Error('O formato está errado');
        }
    }
}

export default EmailValidator;