// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const cantidadCursos = document.getElementById('cantidad');
let cursosAgregados = [];
const alert = document.getElementById('alert');


// Listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarEventListeners();
	// Cantidad inicial de cursos
	cantidad(1);
});

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
	// Elimina un curso en el carrito
	carrito.addEventListener('click', eliminarCurso);
	// Vaciar carrito
	carrito.addEventListener('click', vaciarCarrito);
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
	if (cursosAgregados.some(curso => curso === infoCurso.titulo)) {
		alert.textContent="El curso ya existe";
		alert.style.backgroundColor="red";
		alert.classList.add('alertAnim');
		setTimeout(()=>{
			alert.classList.remove('alertAnim');
		}, 1500);
	} else {
		cursosAgregados.push(infoCurso.titulo);
		insertarCarrito(infoCurso);
		console.log(cursosAgregados)
	}
};

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const fragment = document.createDocumentFragment();
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> <img src="${curso.imagen}" width=120 /> </td>
        <td class="titulo">${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td> <a href="#" class="borrar-curso" data-id="${curso.id}">x</a> </td>
    `;
    fragment.appendChild(row);
    listaCursos.appendChild(fragment);
	cantidad(2);
	alert.textContent="Curso agregado";
	alert.style.backgroundColor="green";
	alert.classList.add('alertAnim');
	setTimeout(()=>{
		alert.classList.remove('alertAnim');
	}, 1500);	
}

// Quita un curso del carrito
function eliminarCurso(e) {
	cursosAgregados = cursosAgregados.filter(curso => curso !== e.target.parentElement.parentElement.querySelector('.titulo').textContent );
	if (e.target.classList.contains('borrar-curso')) {
		e.target.parentElement.parentElement.remove();
		cantidad(3);
	};
}

// Vaciar el carrito
function vaciarCarrito(e) {
	if(e.target.id ==='vaciar-carrito') {
		carrito.querySelector('tbody').innerHTML="";
		cant=0;
		cantidad(1);
	}
}

function cantidad(op) {
	switch (op) {
		case 1:
			cant=0;
			cantidadCursos.textContent=cant;
		break;
		case 2:
			cant++;	
			cantidadCursos.textContent=cant;
		break;
		case 3:
			cant--;	
			cantidadCursos.textContent=cant;
		break;
	}
}