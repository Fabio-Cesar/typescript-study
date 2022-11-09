import RegexValidator from "./regexValidator.js";

class NameValidator extends RegexValidator
{
    get regex()
    {
        return new RegExp(/^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/, "gim");
    }
}

export default NameValidator;