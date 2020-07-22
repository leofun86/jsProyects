// Objeto literal
const cliente_1 = {
    nombre: 'Leo',
    saldo: 5001,
    tipoCliente: function () {
        let tipo;
        
        if (this.saldo > 5000) { tipo='Diamond' }
        else if (this.saldo > 2000) { tipo='Gold' }
        else if (this.saldo > 1000) { tipo='Platinum' }
        else { tipo='Normal' }

        return tipo;
    }
}

console.log(cliente_1.tipoCliente());

// Objeto: método alternativo
function cliente_2(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;
        if (this.saldo > 5000) { tipo='Diamond' }
        else if (this.saldo > 2000) { tipo='Gold' }
        else if (this.saldo > 1000) { tipo='Platinum' }
        else { tipo='Normal' }
        return tipo;
    }
}

const persona = new cliente_2('Leo', 80000);
console.log('---------------------\n------ OBJETOS ------\n---------------------');
console.log('VARIABLE / FUNCIÓN\n-------------------');
console.log(`${persona.nombre} tiene $${persona.saldo} en su cuenta y es un usuario ${persona.tipoCliente()}`);
console.log(cliente_1);
console.log(persona);

// String
const nombre1 = 'Leo';
const nombre2 = new String('Leo');
console.log('TEXTO\n------');
console.log(nombre1);
console.log(nombre2);

// Números
const num1 = 2;
const num2 = new Number(2);
console.log('NÚMEROS\n--------');
console.log(num1);
console.log(num2);

// Funciones
const function1 = (a, b)=>{ return a+b; }
const function2 = new Function('a', 'b', 'return a+b');
console.log('FUNCIONES\n----------');
console.log(function1(1,2));
console.log(function2(2,3));

// Booleanos
const bool1 = true;
const bool2 = new Boolean(true);
console.log('BOOLEANOS\n----------');
console.log(bool1);
console.log(bool2);

// Objetos
const ob1 = { nombre: 'Leo', edad: 33 }
const ob2 = new Object({nombre: 'Leo', edad: 33 });
console.log('OBJETOS\n--------');
console.log(ob1);
console.log(ob2);

// Arrays
const arr1 = [1, 2, 3, 4]
const arr2 = new Array(1, 2, 3, 4);
arr2.push(8);
console.log('OBJETOS\n--------');
console.log(arr1);
console.log(arr2);
