import EmailValidator from "./validators/emailValidator.js";
class EmailInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const input = document.createElement('input');
        input.onchange = () => this.checkEmail();
        shadow.appendChild(input);
    }
    checkEmail() {
        const verifyEmail = this.shadowRoot?.querySelector('input')?.value;
        const emailValidated = new EmailValidator(verifyEmail);
        console.log('success');
    }
}
customElements.define("email-input", EmailInput);
