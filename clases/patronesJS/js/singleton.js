const alumnos = {
    //Lista de alumnos
    listaAlumnos: [],
    //Obtener alumnos
    get: function(id) {
        console.log(id);
    },
    //Crear un alumno
    crear: function(dato) {
        this.listaAlumnos.push(dato);
    },
    //Listar alumnos
    listado: function() {
        return (
            this.listaAlumnos.map(res => {
                console.log(`Nombre: ${res.nombre} - Edad: ${res.edad}`);
            })
        );
    }
}

const infoAlumno = {
    nombre: 'Leo',
    edad: 33,
}
const infoAlumno2 = {
    nombre: 'Charly',
    edad: 35,
}
alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

alumnos.listado();

const el = document.createElement('p');
el.textContent='Abrir consola de navegador';
caja.appendChild(el);