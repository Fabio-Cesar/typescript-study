import StringValidator from "./stringValidator.js";
class RegexValidator extends StringValidator {
    constructor(data) {
        super(data);
        const stringData = this._data;
        if (!stringData.match(this.regex)) {
            throw new Error('O formato está errado');
        }
    }
    get regex() {
        return new RegExp("");
    }
}
export default RegexValidator;
