import Validator from "./abstractValidator.js";
class NumberValidator extends Validator {
    constructor(data) {
        if (typeof (data) === 'number') {
            super(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
export default NumberValidator;
