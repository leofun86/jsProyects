class Formulario {
    constructor() {
        this.campos= []
    }
    agregarCampo(tipo, texto) {
        let campos = this.campos;
        let campo;
        switch(tipo) {
            case "text": campo = new InputText(texto); break;
            case "email": campo = new InputEmail(texto); break;
            case "button": campo = new Button(texto); break;
            default: throw new Error('Tipo no valido '+ tipo);
        }
        campos.push(campo);
    }
    obtenerFormulario() {
        let form = document.createElement('form'), campos = this.campos, campo;

        for (let i=0; i < campos.length; i++) {
            console.log(campo);
            campo = campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;
    }
}

class Inputs { constructor(texto) { this.texto = texto; } }
class InputText extends Inputs {
    constructor(texto) { super(texto); }
    crearElemento() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        inputText.style.marginBottom='10px';
        inputText.style.padding='10px';
        inputText.style.borderRadius='5px';
        return inputText;
    }
}
class InputEmail extends Inputs {
    constructor(texto) { super(texto); }
    crearElemento() {
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        inputEmail.style.marginBottom='10px';
        inputEmail.style.padding='10px';
        inputEmail.style.borderRadius='5px';
        return inputEmail;
    }
}
class Button extends Inputs {
    constructor(texto) { super(texto); }
    crearElemento() {
        const btn = document.createElement('input');
        btn.setAttribute('type', 'submit');
        btn.textContent=this.texto;
        btn.style.padding='10px';
        btn.style.border='none';
        btn.style.borderRadius='5px';
        btn.style.background='green';
        btn.style.color='white';
        btn.style.cursor='pointer';
        return btn;
    }
}

//Instanciar formulario
const form = new Formulario();
form.agregarCampo('text', 'Añader tu nombre');
form.agregarCampo('text', 'Añader tu apellido');
form.agregarCampo('email', 'Añader tu email');
form.agregarCampo('button', 'Terminar');

//Renderizar formulario en HTML
caja.appendChild(form.obtenerFormulario());