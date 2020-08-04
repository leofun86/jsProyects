class UI {
    constructor() {
        // Instanciar la API
        this.api = new API();

        // Crear los markers con layerGroup
        this.markers = new L.LayerGroup();

        // Iniciar el mapa
         this.mapa = this.inicializarMapa();
    }
    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([-34.90243,-56.1773248,20], 19);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
            'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        fetch('https://raw.githubusercontent.com/vierja/geojson_montevideo/master/direcciones_por_barrio/LA%20BLANQUEADA.geojson').then(
            res => res.json()
        ).then(
            data => {
                L.geoJson(data.features.filter(data => data.properties.calle==='CORNELIO CANTERA')).addTo(map)
            }
        )
        return map;
    }
    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJSON.results;

                // Ejecutar la función para mostrar los pines
                this.mostrarPines(resultado);
            })
    }
    mostrarPines(datos) {
        // Limpiar los markers antes hacer el llamado de datos
        this.markers.clearLayers();
        // Recorrer los establecimientos
        datos.forEach(dato => {
            // Destructuring
            const { latitude, longitude, calle, regular, premium } = dato;

            // Crear POPUP
            const opcionesPopUp = L.popup()
                .setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Precio Regular:<b/> $ ${regular}</p>
                    <p><b>Precio Premium:<b/> $ ${premium}</p>
                `)

            // Agregar el PIN
            const marker = new L.marker(
                [
                    parseFloat(latitude),
                    parseFloat(longitude)
                ],
                {
                    icon: L.icon.glyph({
                        prefix: 'glyphicon',
                        glyph: 'step-forward',
                    })
                }
            ).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }
    // Buscador
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(datos => {
                // Obtener los datos
                const resultados = datos.respuestaJSON.results;

                // Enviar JSON y la búsqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda)
            })
    };    
    // Filtra las sugerencias en base al input
    filtrarSugerencias(resultados, busqueda) {
        // Filtrar con .filter
        const filtro = resultados.filter(dato => dato.calle.indexOf(busqueda) !== -1 );

        // Mostrar los pines
        this.mostrarPines(filtro);
    }
}