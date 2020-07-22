function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

function Cliente2 (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

let listaClientes = [];
let listaEmpresas = [];

// Crear un protitipo
    // Tipo de usuario por saldo
    Cliente.prototype.tipoCliente = function () {
        let tipo;
        if (this.saldo > 2000 ) { return tipo = 'Gold' }
        else if (this.saldo > 1000){ return tipo = 'Platinun' }
        else { return tipo = 'Normal' }
    }
    // Imprime saldo y nombre
    Cliente.prototype.datoscliente = function () { return `${this.nombre} de tipo de usuario ${this.tipoCliente()}, tienes un saldo de $${this.saldo}` }
    // Agregar saldo
    Cliente.prototype.agregarSaldo = function () {
        let cantidad = prompt('Por favor, ingrese el monto')
        if (cantidad.length > 0 && typeof(Number(cantidad)) === 'number') {
            console.log(cantidad.length)
            this.saldo=this.saldo + Number(cantidad);
            cantidad='';
            return `Usted ha ingresado $${cantidad} y su saldo es de $${this.saldo}`
        } else { return 'Ha habido un problema, inténtelo de nuevo' }
    }
    // Consulta saldo
    Cliente.prototype.consultaSaldo = function() {
        return `Tu saldo es de $${this.saldo}`;
    };
    // Retirar saldo
    Cliente.prototype.retirarSaldo = function () {
        let cantidad = prompt(`Por favor, ingrese la cantidad a retirar\n Saldo: $${this.saldo}`)
        if (cantidad.length > 0 && typeof(Number(cantidad)) === 'number') {
            this.saldo = this.saldo-Number(cantidad)
            return `Has retirado $${cantidad} y tu saldo actualmente es de $${this.saldo}`
        } else { return `No tienes saldo suficiente` }
    }


// Banca para empresa
    function Empresa(nombre, saldo, telefono, tipo) {
        Cliente.call(this, nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
    // Heredar prototipo de Cliente
    Empresa.prototype = Object.create(Cliente.prototype);

function nuevoCliente() {
    const nombre = prompt('Ingresa tu nombre');
    if (nombre.length > 0) {
        listaClientes.push(new Cliente(nombre, 200))
    }
}

function nuevaEmpresa() {
    const nombre = prompt('Ingresa el nombre de la empresa');
    const telefono = prompt('Ingresa tu número de movil');
    const saldo = prompt('Ingresa un saldo inicial (puede ser 0)');
    const tipo = prompt('Indique el tipo de empresa\nEj: Educativo');
    if (nombre.length > 0 && telefono.length > 0 && typeof(Number(telefono)) === 'number' && saldo.length > 0 && typeof(Number(saldo)) === 'number' && tipo.length > 0) {
        listaEmpresas.push(new Empresa(nombre, Number(saldo), Number(telefono), tipo));
        alert('¡Datos ingresados correctamente!');
    }

}