const comprarBoleto = (function() {
    // Privado
    let evento = 'Conferencia JS 2019';
    
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent=`Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // Público
    return {
        mostrarBoleto: function() {
            adquirirBoleto();
        }
    };
})();

comprarBoleto.mostrarBoleto();