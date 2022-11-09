import { CustomForm, EmailInput, NameInput, PasswordInput} from "./components/index.js";
import { APIResponse, LoginData, UserData } from "./interfaces/index.js";

customElements.define("custom-form", CustomForm, {extends:'form'});
customElements.define("email-input", EmailInput);
customElements.define("name-input", NameInput);
customElements.define("password-input", PasswordInput);

const signupForm = new CustomForm();
signupForm.appendElement('label', [{'name': 'for', 'value': 'signup-form-email'}], "E-mail:");
signupForm.appendElement('email-input', [{'name': 'id', 'value': 'signup-form-email'}]);
signupForm.appendElement('label', [{'name': 'for', 'value': 'signup-form-name'}], "Nome:");
signupForm.appendElement('name-input', [{'name': 'id', 'value': 'signup-form-name'}]);
signupForm.appendElement('label', [{'name': 'for', 'value': 'signup-form-password'}], "Senha:");
signupForm.appendElement('password-input', [{'name': 'id', 'value': 'signup-form-password'}]);
signupForm.appendElement('button', [{'name': 'type', 'value': 'submit'}, {'name': 'id', 'value': 'signup-form-submit'}], "Cadastrar");
document.body.appendChild(signupForm);

const loginForm = new CustomForm();
loginForm.appendElement('label', [{'name': 'for', 'value': 'login-form-email'}], "E-mail:");
loginForm.appendElement('email-input', [{'name': 'id', 'value': 'login-form-email'}]);
loginForm.appendElement('label', [{'name': 'for', 'value': 'login-form-password'}], "Senha:");
loginForm.appendElement('password-input', [{'name': 'id', 'value': 'login-form-password'}]);
loginForm.appendElement('button', [{'name': 'type', 'value': 'submit'}, {'name': 'id', 'value': 'login-form-submit'}], "Logar");
document.body.appendChild(loginForm);

const updateProfileForm = new CustomForm();
updateProfileForm.appendElement('label', [{'name': 'for', 'value': 'update-form-email'}], "E-mail:");
updateProfileForm.appendElement('email-input', [{'name': 'id', 'value': 'update-form-email'}]);
updateProfileForm.appendElement('label', [{'name': 'for', 'value': 'update-form-name'}], "Nome:");
updateProfileForm.appendElement('name-input', [{'name': 'id', 'value': 'update-form-name'}]);
updateProfileForm.appendElement('label', [{'name': 'for', 'value': 'update-form-password'}], "Senha:");
updateProfileForm.appendElement('password-input', [{'name': 'id', 'value': 'update-form-password'}]);
updateProfileForm.appendElement('button', [{'name': 'type', 'value': 'submit'}, {'name': 'id', 'value': 'update-form-submit'}], "Atualizar");
document.body.appendChild(updateProfileForm);

document.querySelector('#signup-form-submit')!.addEventListener('click', Signup);
document.querySelector('#login-form-submit')!.addEventListener('click', Login);
document.querySelector('#update-form-submit')!.addEventListener('click', Update);

async function Signup(e : Event) {
    e.preventDefault();
    const emailInput = document.querySelector('#signup-form-email') as EmailInput;
    const email = emailInput.value;
    const nameInput = document.querySelector('#signup-form-name') as NameInput;
    const name = nameInput.value;
    const passwordInput = document.querySelector('#signup-form-password') as PasswordInput;
    const password = passwordInput.value;
    const bodyValue = {
        'email': email,
        'name': name,
        'password': password
    }
    if (!email || !name || !password)
    {
        console.log("Preencha todos os campos com valores válidos!");
    }
    else
    {
        const data = await request<APIResponse<UserData>>('http://localhost:8000', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(bodyValue)});
    }
}

async function Login(e : Event) {
    e.preventDefault();
    const emailInput = document.querySelector('#login-form-email') as EmailInput;
    const email = emailInput.value;
    const passwordInput = document.querySelector('#login-form-password') as PasswordInput;
    const password = passwordInput.value;
    const bodyValue = {
        'email': email,
        'password': password
    }
    if (!email || !password)
    {
        console.log("Preencha os campos com valores válidos!");
    }
    else
    {
        const data = await request<APIResponse<LoginData>>('http://localhost:8000', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(bodyValue)});
    }
}

async function Update(e: Event) {
    e.preventDefault();
    const emailInput = document.querySelector('#signup-form-email') as EmailInput;
    const email = emailInput.value;
    const nameInput = document.querySelector('#signup-form-name') as NameInput;
    const name = nameInput.value;
    const passwordInput = document.querySelector('#signup-form-password') as PasswordInput;
    const password = passwordInput.value;
    const bodyValue = {
        'email': email,
        'name': name,
        'password': password
    }
    if (!email || !name || !password)
    {
        console.log("Preencha todos os campos com valores válidos!");
    }
    else
    {
        const data = await request<APIResponse<UserData>>('http://localhost:8000', {method: 'PATCH', headers: {"Content-Type": "application/json"}, body: JSON.stringify(bodyValue)});
    }

}

async function request<T>(url: string, config: RequestInit = {}): Promise<T> {
    const response = await fetch(url, config);
    return await response.json();
}