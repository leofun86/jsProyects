// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos () {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

// Datos para la búsqueda
let datosBusqueda = {
    marca: '',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

// Event Listener DOM Loaded
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(obtenerAutos());
});

// Event Listeners para el formulario
const marca = document.getElementById('marca');
marca.addEventListener('input', e=>{
    datosBusqueda.marca = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
})
const year = document.getElementById('year');
year.addEventListener('input', e=>{
    datosBusqueda.year = e.target.value;
})
const minimo = document.getElementById('minimo');
minimo.addEventListener('input', e=>{
    datosBusqueda.minimo = e.target.value;
})
const maximo = document.getElementById('maximo');
maximo.addEventListener('input', e=>{
    datosBusqueda.maximo = e.target.value;
})
const puertas = document.getElementById('puertas');
puertas.addEventListener('input', e=>{
    datosBusqueda.puertas = e.target.value;
})
const transmision = document.getElementById('transmision');
transmision.addEventListener('input', e=>{
    datosBusqueda.transmision = e.target.value;
})
const color = document.getElementById('color');
color.addEventListener('input', e=>{
    datosBusqueda.color = e.target.value;
})

const mostrarAutos = (autos)=>{
    // Leer el elemento resultado
    const fragment = document.createDocumentFragment();
    autos.map(auto => {
        const data = document.createElement('p');
        data.textContent=`${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - ${auto.color} - Transmisión ${auto.transmision} - U$S ${auto.precio}`;
        fragment.appendChild(data);
        document.getElementById('resultado').appendChild(fragment);
    })
}

function filtrarAuto() {
    const resultado = obtenerAutos().filter(filtrarMarca);
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    } else {
        console.log('No hay marca seleccionada')
    }
}