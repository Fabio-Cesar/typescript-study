import Validator from "./abstractValidator.js";
class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof (data) === 'boolean') {
            super(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
export default BooleanValidator;
