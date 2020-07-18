let script = document.getElementById('script_ejemplos');
const caja = document.getElementById('caja');
let url;


const inicio = ()=>{
  url=sessionStorage.getItem('url');
  script.setAttribute('src', url);
}

caja.onload=inicio();

document.querySelector('.link').addEventListener('click', (e)=>{
  switch (e.target.id) {
    case 'ejemplo_module':
      sessionStorage.setItem('url', 'js/module.js');
    break;
    case 'ejemplo_factory':
      sessionStorage.setItem('url', 'js/factory.js');
    break;
    case 'ejemplo_singleton':
      sessionStorage.setItem('url', 'js/singleton.js');
    break;
    case 'ejemplo_bpattern':
      sessionStorage.setItem('url', 'js/builder.js');
    break;
    case 'ejemplo_observer':
      sessionStorage.setItem('url', 'js/observer.js');
    break;
    case 'ejemplo_mediator':
      sessionStorage.setItem('url', 'js/mediator.js');
    break;
    case 'ejemplo_nspace':
      sessionStorage.setItem('url', 'js/nspace.js');
    break;
  }
  document.location.reload();
});

$('#tema1').click( ()=>{
    $('#caja1').slideToggle('slow');
    $('#caja2').slideUp('slow'); $('#caja3').slideUp('slow');
    $('#caja4').slideUp('slow'); $('#caja5').slideUp('slow');
    $('#caja6').slideUp('slow');
  });
  $('#tema2').click( ()=>{
    $('#caja2').slideToggle('slow');
    $('#caja1').slideUp('slow'); $('#caja3').slideUp('slow');
    $('#caja4').slideUp('slow'); $('#caja5').slideUp('slow');
    $('#caja6').slideUp('slow');
  });
  $('#tema3').click( ()=>{
    $('#caja3').slideToggle('slow');
    $('#caja1').slideUp('slow'); $('#caja2').slideUp('slow');
    $('#caja4').slideUp('slow'); $('#caja5').slideUp('slow');
    $('#caja6').slideUp('slow');
  });
  $('#tema4').click( ()=>{
    $('#caja4').slideToggle('slow');
    $('#caja1').slideUp('slow'); $('#caja2').slideUp('slow');
    $('#caja3').slideUp('slow'); $('#caja5').slideUp('slow');
    $('#caja6').slideUp('slow');
  });
  $('#tema5').click( ()=>{
    $('#caja5').slideToggle('slow');
    $('#caja1').slideUp('slow'); $('#caja2').slideUp('slow');
    $('#caja3').slideUp('slow'); $('#caja4').slideUp('slow');
    $('#caja6').slideUp('slow');
  });
  $('#tema6').click( ()=>{
    $('#caja6').slideToggle('slow');
    $('#caja1').slideUp('slow'); $('#caja2').slideUp('slow');
    $('#caja3').slideUp('slow'); $('#caja4').slideUp('slow');
    $('#caja5').slideUp('slow');
  });