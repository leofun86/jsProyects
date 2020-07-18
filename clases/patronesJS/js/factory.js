function constructorSitios() {
    const caja = document.getElementById('caja');
    this.crearElemento = function(texto, tipo) {
        let html;
        switch (tipo) {
            case 'input':
                html = new inputHTML(texto);
            break;
            case 'img':
                html = new imgHTML(texto);
            break;
            case 'h1':
                html = new headingHTML(texto);
            break;
            case 'p':
                html = new pHTML(texto);
            break;
        }

        html.tipo = tipo;

        html.mostrar = function() {
            const elemento = document.createElement(this.tipo);
            switch (this.tipo) {
                case 'input':
                    elemento.setAttribute('placeholder', this.texto);
                break;
                case 'img':
                    elemento.style.width='200px';
                    elemento.setAttribute('src', this.texto);
                break;
                case 'h1':
                    elemento.appendChild(document.createTextNode(this.texto));
                break;
            }
            elemento.style.display='block';
            elemento.style.margin='10px 0px';
            caja.appendChild(elemento);
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