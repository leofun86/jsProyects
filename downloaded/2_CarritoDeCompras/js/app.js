// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

// Listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarEventListeners()
});

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
}

// Funciones

// Añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    // Delegation para agregar el carrito // Reacciona al código cuando presionamos en AGREGAR CARRITO
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    };
}

// Lee los datos del curso agregado
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    };

    insertarCarrito(infoCurso);
};

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const fragment = document.createDocumentFragment();
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> <img src="${curso.imagen}" width=120 /> </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td> <a href="#" class="borrar-curso" data-id="${curso.id}">x</a> </td>
    `;
    fragment.appendChild(row);
    listaCursos.appendChild(fragment);
}