import { EmailValidator } from "../validators/index.js";

class EmailInput extends HTMLElement {
    static formAssociated = true;

    protected _input : HTMLInputElement;

    constructor()
    {
        super();
        const shadow = this.attachShadow({ mode: "closed", delegatesFocus: true });
        this._input = document.createElement('input');
        this._input.onchange = () => this.checkInput();
        shadow.appendChild(this._input);
    }

    checkInput()
    {
        try
        {
            const input = this._input;
            const verifyEmail = input.value;
            const emailValidated = new EmailValidator(verifyEmail);
            console.log("success");
        }
        catch (error)
        {
            const input = this._input;
            input.value = "";
            console.log(`error`);
        }
    }

    get value()
    {
        return this._input.value;
    }
}

export default EmailInput;
