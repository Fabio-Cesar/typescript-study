import { NameValidator } from "../validators/index.js";
class NameInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "closed", delegatesFocus: true });
        this._input = document.createElement('input');
        this._input.onchange = () => this.checkInput();
        shadow.appendChild(this._input);
    }
    checkInput() {
        try {
            const input = this._input;
            const verifyName = input.value;
            const nameValidated = new NameValidator(verifyName);
            console.log("success");
        }
        catch (error) {
            const input = this._input;
            input.value = "";
            console.log("error");
        }
    }
    get value() {
        return this._input.value;
    }
}
NameInput.formAssociated = true;
export default NameInput;
