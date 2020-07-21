// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const cantidadCursos = document.getElementById('cantidad');
let cursosAgregados = [];
const alert = document.getElementById('alert');
const btnVaciarCarrito = document.getElementById('vaciar-carrito');

// Listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarEventListeners();
});

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
	// Elimina un curso en el carrito
	carrito.addEventListener('click', eliminarCurso);
	// Vaciar carrito
	btnVaciarCarrito.addEventListener('click', vaciarCarrito);
	// Carga cursos en carrito
	leerLocalStorage();
	// Agrega las cantidades de cursos agregados en el carrito en un notificador sobre el ícono de carrito
	cantidad(1);
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
	return true;
}

// Lee los datos del curso agregado
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    };
	if (localStorage.getItem('cursos') !== null) {
		if (JSON.parse(localStorage.getItem('cursos')).some(curso => curso.titulo === infoCurso.titulo)) {
			alert.textContent="El curso ya existe";
			alert.style.backgroundColor="red";
			alert.classList.add('alertAnim');
			setTimeout(()=>{
				alert.classList.remove('alertAnim');
			}, 1500);
		} else {
			cursosAgregados.push(infoCurso.titulo);
			insertarCarrito(infoCurso);
		}
	} else {
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
		}
	}
	return true;
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
	guardarCursoLocalStorage(curso);
	cantidad(2);
	alert.textContent="Curso agregado";
	alert.style.backgroundColor="green";
	alert.classList.add('alertAnim');
	setTimeout(()=>{
		alert.classList.remove('alertAnim');
	}, 1500);
	return true;
}

// Quita un curso del carrito
function eliminarCurso(e) {
	if (e.target.classList.contains('borrar-curso')) {
		eliminarCursoLocalStorage(e);
		e.target.parentElement.parentElement.remove();
	}
	return true;
}

// Vaciar el carrito
function vaciarCarrito(e) {
	// Forma lenta
		//listaCursos.innerHTML='';
		/*
		if(e.target.id ==='vaciar-carrito') {
			carrito.querySelector('tbody').innerHTML="";
			cant=0;
			cantidad(1);
		}
		*/
		
	// Forma rápida
	while (listaCursos.firstChild) {
		listaCursos.firstChild.remove();
	}
	vaciarLocalStorage();
	return true;
}

// Almacena los cursos del carrito a LocalStorage
function guardarCursoLocalStorage(curso) {
	let cursos;
	// Toma datos de LocalStorage o un array vacío
	cursos = obtenerCursosLocalStorage();
	console.log(cursos);
	// El curso seleccionado se agrega al array
	cursos.push(curso);
	// Almacena los cursos en LocalStorage
	localStorage.setItem('cursos', JSON.stringify(cursos));
	return true;
}

// Obtiene los cursos almacenados en Local Storage
function obtenerCursosLocalStorage() {
	let cursosLS=[];
	// Comprobamos si hay datos en LocalStorage
	if (localStorage.getItem('cursos') !== null) {
		cursosLS = JSON.parse(localStorage.getItem('cursos'));
	}
	return cursosLS;
}

// Imprime los cursos de LocalStorage en el carrito
function leerLocalStorage() {
	let LS;
	cursosLS = obtenerCursosLocalStorage();
	cursosLS.forEach(curso => {
		// Construir el template
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
	});
	return true;
};

// Notificación de cantidad de cursos agregados al carrito
function cantidad(op) {
	switch (op) {
		case 1:
			if (localStorage.getItem('cursos') !== null) {
				cant = JSON.parse(localStorage.getItem('cursos')).length;
				cantidadCursos.textContent=cant;
			} else {
				cant=0;
				cantidadCursos.textContent=cant;
			}
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
	return true;
}

// Elimina el curso en LocalStorage
function eliminarCursoLocalStorage(e) {
	if (localStorage.getItem('cursos') !== null) {
		let cursos = JSON.parse(localStorage.getItem('cursos'));
		cursos = cursos.filter(curso => curso.id !== e.target.attributes[2].value);
		localStorage.setItem('cursos', JSON.stringify(cursos));
		cantidad(1);11
	} else {
		cantidad(3);
	}
	return true;
}

// Vacía el array de LocalStorate
function vaciarLocalStorage() {
	localStorage.clear();
	// Alternativa --> localStorage.setItem('cursos', JSON.stringify([]));
	cantidad(1);
	return true;
}