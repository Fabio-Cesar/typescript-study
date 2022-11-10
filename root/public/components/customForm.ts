import { IAttributes } from "../interfaces";

class CustomForm extends HTMLFormElement
{
    appendElement(tag : string, attributes : Array<IAttributes>, text = "")
    {
        const element = document.createElement(`${tag}`);

        for (let i = 0; i < attributes.length; i++)
        {
            element.setAttribute(`${attributes[i].name}`, `${attributes[i].value}`);
        }

        element.textContent = text;

        this.appendChild(element);
    }
}

export default CustomForm;