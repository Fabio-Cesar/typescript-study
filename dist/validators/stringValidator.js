import Validator from "./abstractValidator.js";
class StringValidator extends Validator {
    constructor(data) {
        if (typeof (data) === 'string') {
            super(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
export default StringValidator;
