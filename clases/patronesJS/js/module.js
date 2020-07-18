const comprarBoleto = (function() {
    // Privado
    let evento = 'Conferencia JS 2019';
    const caja = document.getElementById('caja');
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent=`Comprando boleto para ${evento}`;
        caja.appendChild(elemento);
    }

    // Público
    return {
        mostrarBoleto: function() {
            adquirirBoleto();
        }
    };
})();

comprarBoleto.mostrarBoleto();