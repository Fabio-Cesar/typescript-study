var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CustomForm, EmailInput, NameInput, PasswordInput } from "./components/index.js";
customElements.define("custom-form", CustomForm, { extends: 'form' });
customElements.define("email-input", EmailInput);
customElements.define("name-input", NameInput);
customElements.define("password-input", PasswordInput);
const signupForm = new CustomForm();
signupForm.appendElement('label', [{ 'name': 'for', 'value': 'signup-form-email' }], "E-mail:");
signupForm.appendElement('email-input', [{ 'name': 'id', 'value': 'signup-form-email' }]);
signupForm.appendElement('label', [{ 'name': 'for', 'value': 'signup-form-name' }], "Nome:");
signupForm.appendElement('name-input', [{ 'name': 'id', 'value': 'signup-form-name' }]);
signupForm.appendElement('label', [{ 'name': 'for', 'value': 'signup-form-password' }], "Senha:");
signupForm.appendElement('password-input', [{ 'name': 'id', 'value': 'signup-form-password' }]);
signupForm.appendElement('button', [{ 'name': 'type', 'value': 'submit' }, { 'name': 'id', 'value': 'signup-form-submit' }], "Cadastrar");
document.body.appendChild(signupForm);
const loginForm = new CustomForm();
loginForm.appendElement('label', [{ 'name': 'for', 'value': 'login-form-email' }], "E-mail:");
loginForm.appendElement('email-input', [{ 'name': 'id', 'value': 'login-form-email' }]);
loginForm.appendElement('label', [{ 'name': 'for', 'value': 'login-form-password' }], "Senha:");
loginForm.appendElement('password-input', [{ 'name': 'id', 'value': 'login-form-password' }]);
loginForm.appendElement('button', [{ 'name': 'type', 'value': 'submit' }, { 'name': 'id', 'value': 'login-form-submit' }], "Logar");
document.body.appendChild(loginForm);
const updateProfileForm = new CustomForm();
updateProfileForm.appendElement('label', [{ 'name': 'for', 'value': 'update-form-email' }], "E-mail:");
updateProfileForm.appendElement('email-input', [{ 'name': 'id', 'value': 'update-form-email' }]);
updateProfileForm.appendElement('label', [{ 'name': 'for', 'value': 'update-form-name' }], "Nome:");
updateProfileForm.appendElement('name-input', [{ 'name': 'id', 'value': 'update-form-name' }]);
updateProfileForm.appendElement('label', [{ 'name': 'for', 'value': 'update-form-password' }], "Senha:");
updateProfileForm.appendElement('password-input', [{ 'name': 'id', 'value': 'update-form-password' }]);
updateProfileForm.appendElement('button', [{ 'name': 'type', 'value': 'submit' }, { 'name': 'id', 'value': 'update-form-submit' }], "Atualizar");
document.body.appendChild(updateProfileForm);
document.querySelector('#signup-form-submit').addEventListener('click', Signup);
document.querySelector('#login-form-submit').addEventListener('click', Login);
document.querySelector('#update-form-submit').addEventListener('click', Update);
function Signup(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const emailInput = document.querySelector('#signup-form-email');
        const email = emailInput.value;
        const nameInput = document.querySelector('#signup-form-name');
        const name = nameInput.value;
        const passwordInput = document.querySelector('#signup-form-password');
        const password = passwordInput.value;
        const bodyValue = {
            'email': email,
            'name': name,
            'password': password
        };
        if (!email || !name || !password) {
            console.log("Preencha todos os campos com valores válidos!");
        }
        else {
            const data = yield request('http://localhost:8000', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(bodyValue) });
        }
    });
}
function Login(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const emailInput = document.querySelector('#login-form-email');
        const email = emailInput.value;
        const passwordInput = document.querySelector('#login-form-password');
        const password = passwordInput.value;
        const bodyValue = {
            'email': email,
            'password': password
        };
        if (!email || !password) {
            console.log("Preencha os campos com valores válidos!");
        }
        else {
            const data = yield request('http://localhost:8000', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(bodyValue) });
        }
    });
}
function Update(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const emailInput = document.querySelector('#signup-form-email');
        const email = emailInput.value;
        const nameInput = document.querySelector('#signup-form-name');
        const name = nameInput.value;
        const passwordInput = document.querySelector('#signup-form-password');
        const password = passwordInput.value;
        const bodyValue = {
            'email': email,
            'name': name,
            'password': password
        };
        if (!email || !name || !password) {
            console.log("Preencha todos os campos com valores válidos!");
        }
        else {
            const data = yield request('http://localhost:8000', { method: 'PATCH', headers: { "Content-Type": "application/json" }, body: JSON.stringify(bodyValue) });
        }
    });
}
function request(url, config = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, config);
        return yield response.json();
    });
}
