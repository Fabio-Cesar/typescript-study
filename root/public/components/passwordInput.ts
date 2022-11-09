import { PasswordValidator } from "../validators/index.js";

class PasswordInput extends HTMLElement {
    static formAssociated = true;

    protected _input : HTMLInputElement;

    constructor()
    {
        super();
        const shadow = this.attachShadow({ mode: "closed", delegatesFocus: true });
        this._input = document.createElement('input');
        this._input.setAttribute('type', 'password');
        this._input.onchange = () => this.checkInput();
        shadow.appendChild(this._input);
    }

    checkInput()
    {
        try {
            const input = this._input;
            const verifyPassword = input.value;
            const passwordValidated = new PasswordValidator(verifyPassword);
            console.log("success");
        } catch (error) {
            const input = this._input;
            input.value = "";
            console.log("error");
        }
    }

    get value()
    {
        return this._input.value;
    }
}

export default PasswordInput;
