const marcas = ['Seleccione', 'BMW', 'Mercedes Benz', 'Chevrolet', 'Ford', 'Dodge'];
const precio_min_max = [
    {
        init: 'Seleccione'
    },
    {
        value:20000,
        text:'20,000'
    },
    {
        value:30000,
        text:'30,000'
       
    },
    {
        value:40000,
        text:'40,000'
    },
    {
        value:50000,
        text:'50,000'
    },
    {
        value:60000,
        text:'60,000'
    },
    {
        value:70000,
        text:'70,000'
    },
    {
        value:80000,
        text:'80,000'
    },
    {
        value:90000,
        text:'90,000'
    },
];
const puertass = ['Seleccione', 2, 4];
const colores = ['Seleccione', 'Negro', 'Azul', 'Blanco', 'Rojo'];
const transmition = [
    {
        init: 'Seleccione'
    },
    {
        value: 'automatico',
        text: 'Automática'
    },
    {
        value: 'manual',
        text: 'Manual'
    }
];

const fragment = document.createDocumentFragment();

const select_marcas = document.getElementById('marca'); 
const select_minimo = document.getElementById('minimo');
const select_maximo = document.getElementById('maximo');
const select_puertas = document.getElementById('puertas');
const select_transmision = document.getElementById('transmision');
const select_color = document.getElementById('color');

document.addEventListener('DOMContentLoaded', ()=>{
    cargaDatosForm(marcas, precio_min_max);
});

function cargaDatosForm(marcas, precio_min_max) {
    selectMarcas(marcas);
    selectMinMax(select_minimo, precio_min_max);
    selectMinMax(select_maximo, precio_min_max);
    selectPuertas(puertass);
    selectTransmision(transmition);
    selectColores(colores);
    return true;
}

function selectMinMax(select, min_max) {
    min_max.map(precio => {
        const option_min_max = document.createElement('option');
        if (precio.init) {
            option_min_max.textContent=precio.init;
        } else {
            option_min_max.setAttribute('value', precio.value);
            option_min_max.textContent=precio.text;
        }
        fragment.appendChild(option_min_max);
        select.appendChild(fragment);
    });
}

function selectMarcas(marcas) {
    marcas.map(marca => {
        const option_marcas = document.createElement('option');
        option_marcas.setAttribute('value', marca);
        option_marcas.textContent=marca;
        fragment.appendChild(option_marcas);
        select_marcas.appendChild(fragment);
    });
}

function selectPuertas(puertas) {
    puertas.map(puerta => {
        const option_puerta = document.createElement('option');
        option_puerta.setAttribute('value', puerta);
        option_puerta.textContent=puerta;
        fragment.appendChild(option_puerta);
        select_puertas.appendChild(fragment);
    });
}

function selectTransmision(transmision) {
    transmision.map(trans => {
        const option_trans = document.createElement('option');
        if (trans.init) {
            option_trans.textContent = trans.init;
        } else {
            option_trans.setAttribute('value', trans.value);
            option_trans.textContent=trans.text;
        }
        fragment.appendChild(option_trans);
        select_transmision.appendChild(fragment);
    });
};

function selectColores(colores) {
    colores.map(color => {
        const option_color = document.createElement('option');
        option_color.setAttribute('value', color);
        option_color.textContent=color;
        fragment.appendChild(option_color);
        select_color.appendChild(fragment);
    })
};