// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje')
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
const formulario = document.getElementById('enviar-mail');
const loader = document.querySelector('#loaders img');
const error = document.getElementById('error');
let validEmail = false;


// Event Listeners
eventListeners();

function eventListeners() {
    // Inicio de la app
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Botón de enviar en el submit
    formulario.addEventListener('submit', enviarEmail);

    // Reseteo de formulario
    btnReset.addEventListener('click', resetearFormulario);
}

// Funciones
function inicioApp() {
    // Desabilitar el envio
    btnEnviar.disabled= true;
}

// Valida que el campo tenga algo escrito
function validarCampo() {
    // Se valida la longitud del texto
    validarLongitud(this);
    
    // Validar email
    if (this.type === 'email') { validarEmail(this) }
    
    // Habilidar o deshabilitar el botón de envío
    validarBotonEnviar();

}

// Verifica la lonfitug del texto en los campos
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    }
    
};

// Verifica que los campos estén correctos para habilitar o deshabilitar el botón de envío 
function validarBotonEnviar() {
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '' && validEmail) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled= true;
    }
}

// Evalua que el correo esté bien escrito
function validarEmail(email) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email.value)) {
        validEmail = true;
        error.style.color='green';
        error.textContent="El correo es válido"
    } else {
        validEmail = false;
        error.style.color='red';
        error.textContent="El correo no es válido"
    }
};

// Envío de correo
function enviarEmail(e) {
    e.preventDefault();
    loader.src = 'img/spinner.gif';
    $(loader).fadeIn('fast');
    setTimeout(()=>{
        loader.src = 'img/mail.gif';
        setTimeout(()=>{
            $(loader).fadeOut('fast');
            formulario.reset();
        }, 5000);
    }, 2000);
}

function resetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
}