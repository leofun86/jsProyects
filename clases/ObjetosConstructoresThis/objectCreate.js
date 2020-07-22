// Object Create
const Cliente = {
    imprimirSaldo: function() {
        return `Hola ${this.nombre}, tu saldo es de $${this.saldo}`
    },
    retirar: function(retiro) {
        this.saldo -= retiro
        return `Retiraste ${retiro} y tu saldo es de $${this.saldo}`
    },
}

//Crear el objeto
const mary = Object.create(Cliente);

mary.nombre = 'Mary';
mary.saldo = 2000;

console.log(mary.imprimirSaldo())
console.log(mary.retirar(1500));

console.log(mary)

const leon = Object.create(Cliente);
leon.nombre = 'Leon';
leon.saldo = 3500;

console.log(leon)