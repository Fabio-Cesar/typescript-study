class AbstractInput extends HTMLElement {
    static formAssociated = true;
    _input;
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "closed", delegatesFocus: true });
        this._input = document.createElement('input');
        this._input.onchange = () => this.checkInput();
        shadow.appendChild(this._input);
    }
    checkInput() {
    }
}
export default AbstractInput;
