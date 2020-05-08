function constructorSitios() {
    this.crearElemento = function(texto, tipo) {
        let html;
        if (tipo === 'input') {
            html = new inputHTML(texto);
        } else if (tipo === 'img') {
            html = new imgHTML(texto);
        } else if (tipo === 'h1') {
            html = new headingHTML(texto);
        } else if (tipo === 'p') {
            html = new pHTML(texto);
        }

        html.tipo = tipo;

        html.mostrar = function() {
            const elemento = document.createElement(this.tipo);
            if (this.tipo === 'input') {
                elemento.setAttribute('placeholder', this.texto);
            } else if (this.tipo === 'img') {
                elemento.style.width='200px';
                elemento.setAttribute('src', this.texto);
            } else {
                elemento.appendChild(document.createTextNode(this.texto));
            }
            elemento.style.display='block';
            elemento.style.margin='10px 0px';
            document.querySelector('#app').appendChild(elemento);
        }

        return html;
    }
}

const headingHTML = function (texto) { this.texto = texto; }
const inputHTML = function (texto) { this.texto = texto; }
const imgHTML = function (texto) { this.texto = texto; }
const pHTML = function (texto) { this.texto = texto; }

const sitioWeb = new constructorSitios();

// Almacenar los elementos
const elementosWeb = [];

elementosWeb.push(sitioWeb.crearElemento('Bienvenidos H1', 'h1'));
elementosWeb.push(sitioWeb.crearElemento('assets/img.jpg', 'img'));
elementosWeb.push(sitioWeb.crearElemento('ingrese un dato', 'input'));
elementosWeb.push(sitioWeb.crearElemento('Bienvenidos P', 'p'));

elementosWeb.forEach(elemento => {
    elemento.mostrar();
});