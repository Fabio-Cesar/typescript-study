class CustomInput extends HTMLElement {
    static formAssociated = true;
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open", delegatesFocus: true });
        const input = document.createElement('input');
        input.onchange = () => this.checkInput();
        shadow.appendChild(input);
    }
    checkInput() {
    }
}
export default CustomInput;
