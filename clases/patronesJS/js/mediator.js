const Vendedor = function (nombre) {
    this.nombre = nombre;
    this.sala=null;
}
const Comprador = function (nombre) {
    this.nombre = nombre;
    this.sala=null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio) {
        console.log(`Tenemos el siguiente artículo: ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador) {
        console.log(`Vendido a ${comprador.nombre} (sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) { console.log(`${comprador.nombre}: ${mensaje}`); }
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Instanciar las clases

//Compradores
const leo = new Comprador('Leo');
const minie = new Comprador('Minie');
const pluto = new Comprador('Pluto');

//Vendedor
const vendedor = new Vendedor('Verónica');

//Subasta
const subasta = new Subasta();
subasta.registrar(leo);
subasta.registrar(pluto);

vendedor.oferta('Cocina Oxidada', 4600);
leo.oferta(3000, leo);
pluto.oferta(2500, pluto);
minie.oferta(6000, minie);
vendedor.vendido(minie);

const el = document.createElement('p');
el.textContent='Abrir consola de navegador';
caja.appendChild(el);