//También se lo conoce como suscriptor-publicador

let observer = {
    obtenerOfertas: function(callback) {
        if (typeof callback === 'function') {
            this.suscribers[this.suscribers.length] = callback;        }
    },
    cancelarOfertas: function(callback) {
        for (let i=0;i < this.suscribers.length; i++) {
            if(this.suscribers[i] === callback) {
                delete this.suscribers[i];
            }
        }
    },
    publicarOfertas: function(callback) {
        for (let i=0;i < this.suscribers.length; i++) {
            if(typeof this.suscribers[i] === 'function') {
                this.suscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for(let i in this) {
            if(this.hasOwnProperty[i]){
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }
}