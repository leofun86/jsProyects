const restaurApp = {}
restaurApp.platos = [
    {
        plato: 'Pizza',
        precio: 30,
    },
    {
        plato: 'Hamburguesa',
        precio: 20,
    },
    {
        plato: 'Hot Dog',
        precio: 15,
    },

];
restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo ${restaurApp.platos[id].plato} se está preparando`);
    },
    agregarPlato: (plato, precio) => {
        const nuevo = { plato, precio }
        restaurApp.platos.push(nuevo)
    },
    mostrarMenu: platos => {
        console.log('Bienvenido a nuestro menú: ');
        const lista = document.createElement('ul');
        lista.style.listStyle='none';
        platos.map((res, index) => {
            const el = document.createElement('li');
            el.innerHTML=`#${index}&nbsp;&nbsp;&nbsp;Plato: <div style="color:yellow;width:200px;display:inline-block;">${res.plato}</div> <span style="color:yellow">$${res.precio}</span>`;
            lista.appendChild(el);
        });
        caja.appendChild(lista);
    }
};
restaurApp.funciones.agregarPlato('Canelones de verdura', 13);
restaurApp.funciones.agregarPlato('Ravioles de ricota', 25);
const { platos } = restaurApp;
restaurApp.funciones.mostrarMenu(platos);

/*
const el = document.createElement('p');
el.textContent='Abrir consola de navegador';
caja.appendChild(el);
*/