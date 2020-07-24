document.querySelector('#generar-nombre').addEventListener('submit', cargaNombres);

// Llamado a AJAX e imprimir resultados
function cargaNombres(e){
    e.preventDefault();
    // Leer las variables
    const origen = document.getElementById('origen').selectedOptions[0].value;
    const genero = document.getElementById('genero').selectedOptions[0].value;
    const cantidad = document.getElementById('numero').value;

    // Creación de URL base
    let url = 'https://genericapp.000webhostapp.com/uinames/api/?';

    // Si hay origen, agregarlo a la URL
    if(origen !== '') url += `region=${origen}&`;
    // Si hay género, agregarlo a la URL
    if(genero !== '') url += `gender=${genero}&`;
    // Si hay cantidad, agregarlo a la URL
    if(cantidad !== '') url += `amount=${cantidad}`;
    
    // Conectar con AJAX
        let htmlNombres=``;
        // XMLIniciar HTTPRequest
        const xhr = new XMLHttpRequest();
        // Abrir conexión
        xhr.open('GET', url, true);
        // Datos e impresión del template
        xhr.onload = function () {
            if (this.status === 200) {
                const nombres = JSON.parse(this.responseText);
                // Generar HTML
                htmlNombres = '<h5 style="text-align:center;">Nombres generados</h5>';
                htmlNombres+='<ul style="list-style:none; class="lista">';
                nombres.map(nombre=>htmlNombres+=`<li>${nombre.name} ${nombre.surname}</li>`);
                htmlNombres+='</ul>';
                document.getElementById('resultado').classList.add('lista');
                document.getElementById('resultado').innerHTML=htmlNombres;
            }
        };
        beforeSend();
        // Enviar request
        setTimeout(()=>{
            xhr.send();
        }, 2000);

}

function beforeSend() {
    document.getElementById('resultado').classList.remove('lista');
    document.getElementById('resultado').innerHTML='<p style="margin-top:10px;text-align:center;">Cargando</p>';
}