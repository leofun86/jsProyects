class API {
    async obtenerDatos() {
        const total = 30;
        // Obtener datos desde la API
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);
        
        // Retornar datos como JSON
        const respuestaJSON = await datos.json();
        
        return {
            respuestaJSON
        }
    } 
}