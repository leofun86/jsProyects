// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
const caja = document.getElementById('resultado');
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
        {
			marca: 'Audi',
			modelo: 'A4',
			year: 2018,
			precio: 40000,
			puertas: 4,
			color: 'Negro',
			transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
			marca: 'Audi',
			modelo: 'A6',
			year: 2010,
			precio: 35000,
			puertas: 4,
			color: 'Negro',
			transmision: 'automatico'
		},
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
        {
			marca: 'Ford',
			modelo: 'Mustang',
			year: 2019,
			precio: 80000,
			puertas: 2,
			color: 'Rojo',
			transmision: 'manual'
		},
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
			marca: 'Audi',
			modelo: 'A3',
			year: 2017,
			precio: 55000,
			puertas: 2,
			color: 'Negro',
			transmision: 'manual'
		},
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
        {
			marca: 'Ford',
			modelo: 'Mustang',
			year: 2017,
			precio: 60000,
			puertas: 2,
			color: 'Negro',
			transmision: 'manual'
		},
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
        {
			marca: 'Audi',
			modelo: 'A4',
			year: 2016,
			precio: 30000,
			puertas: 4,
			color: 'Azul',
			transmision: 'automatico'
		}
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
    datosBusqueda.year = Number(e.target.value);
    filtrarAuto();
})
const minimo = document.getElementById('minimo');
minimo.addEventListener('input', e=>{
    datosBusqueda.minimo = Number(e.target.value);
    filtrarAuto();
})
const maximo = document.getElementById('maximo');
maximo.addEventListener('input', e=>{
    datosBusqueda.maximo = Number(e.target.value);
    filtrarAuto();
})
const puertas = document.getElementById('puertas');
puertas.addEventListener('input', e=>{
    datosBusqueda.puertas = Number(e.target.value);
    filtrarAuto();
})
const transmision = document.getElementById('transmision');
transmision.addEventListener('input', e=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
const color = document.getElementById('color');
color.addEventListener('input', e=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

const mostrarAutos = (autos)=>{
    // Leer el elemento resultado
    const fragment = document.createDocumentFragment();
    autos.map(auto => {
        const data = document.createElement('p');
        data.textContent=`${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - ${auto.color} - Transmisión ${auto.transmision} - U$S ${auto.precio}`;
        fragment.appendChild(data);
        caja.appendChild(fragment);
    })
}

function filtrarAuto() {
    let resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    cargando();
    setTimeout(()=>{
        if (resultado.length > 0) {
            return mostrarAutos(resultado);
        } else {
            return noResult();
        }
    }, 1000);
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) { return auto.marca === datosBusqueda.marca } else { return auto };
}
function filtrarYear(auto) {
    if (datosBusqueda.year) { return auto.year === datosBusqueda.year } else { return auto };
}
function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) { return auto.precio >= datosBusqueda.minimo } else { return auto };
}
function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) { return auto.precio <= datosBusqueda.maximo } else { return auto };
}
function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) { return auto.puertas === datosBusqueda.puertas } else { return auto };
}
function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) { return auto.transmision === datosBusqueda.transmision } else { return auto };
}
function filtrarColor(auto) {
    if (datosBusqueda.color) { return auto.color === datosBusqueda.color } else { return auto };
}

function cargando() {
    caja.innerHTML="";
    const fragment = document.createDocumentFragment();
    const center = document.createElement('center');
    center.setAttribute('id', 'center_img');
    const img = document.createElement('img');
    img.setAttribute('src', 'assets/load.gif');
    img.style.width='80px';
    center.appendChild(img);
    fragment.appendChild(center);
    caja.appendChild(fragment);
    setTimeout(()=>{ document.getElementById('center_img').remove(); }, 1000);
}
function noResult() {
    caja.innerHTML="";
    const fragment = document.createDocumentFragment();
    const ele = document.createElement('h5');
    ele.textContent='No se han encontrado resultados';
    ele.style.color='white';
    ele.style.backgroundColor='red';
    ele.style.borderRadius='5px';
    ele.style.padding="10px";
    ele.style.textAlign='center';
    fragment.appendChild(ele);
    caja.appendChild(fragment);
}