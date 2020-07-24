class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    consultaSaldo () {
        return `Tu saldo es de $${this.saldo}`;
    }
    agregarSaldo(cantidad) {
        this.saldo += cantidad;
        return `Has agregado $${cantidad} y tu saldo es de  $${this.saldo}`;
    }
    retirarSaldo(retiro) {
        if (retiro <= this.saldo) {
            this.saldo -= retiro;
            return `Has retirado $${retiro} y tu saldo es de $${this.saldo}`;
        } else {
            return `Saldo insuficiente`;
        }
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo){
        // SUPER va hacia el constructor padre
        super(nombre, saldo);
        // Estas variables no existen en su constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
}
Empresa.prototype = Object.create(Cliente.prototype);

const cliente = new Cliente('Leo', 2000);

const empresa = new Empresa('Aurodidacta', 2000, 096108896, 'Educativa');