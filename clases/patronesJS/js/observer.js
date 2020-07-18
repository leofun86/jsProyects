//También se lo conoce como suscriptor-publicador

let observer = {
    obtenerOfertas: function(callback) {
        if (typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback;        }
    },
    cancelarOfertas: function(callback) {
        for (let i=0;i < this.subscribers.length; i++) {
            if(this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function(oferta) {
        for (let i=0;i < this.subscribers.length; i++) {
            if(typeof this.subscribers[i] === 'function') {
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for(let i in this) {
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

//Vendedores
const udemy = {
    nuevoCurso: function() {
        const curso = "Nuevo curso de JavaScript";
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function() {
        const oferta = "Compra un celular";
        this.publicarOferta(oferta);
    }
}

//Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const leo = {
    compartir: function(oferta) {
        console.log('¡A Leo le parece una excelente oferta! '+oferta);
    },
}

const karen = {
    interesa: function(oferta) {
        console.log('A Karen le interesa este curso: '+ oferta);
    },
}
console.log('------\nUDEMY\n------');
udemy.obtenerOfertas(leo.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa);
console.log('-----------------------\nDesuscripción de Karen\n-----------------------');
udemy.nuevoCurso();
console.log('---------\nFACEBOOK\n---------');
facebook.obtenerOfertas(karen.interesa);
facebook.obtenerOfertas(leo.compartir);
facebook.nuevoAnuncio();
facebook.cancelarOfertas(leo.compartir);
console.log('---------------------\nDesuscripción de Leo\n---------------------');
facebook.nuevoAnuncio();



const el = document.createElement('p');
el.textContent='Abrir consola de navegador';
caja.appendChild(el);