//Animacion al scrollear
window.addEventListener("scroll", function(){
    let animacion = document.getElementById("grafico");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = "mover 2s ease-out"
    }
})

//Modo oscuro al presionar categorias
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('shown.bs.dropdown', function () {
        el_overlay = document.createElement('span');
        el_overlay.className = 'screen-darken';
        document.body.appendChild(el_overlay)
    });

    everydropdown.addEventListener('hide.bs.dropdown', function () {
      document.body.removeChild(document.querySelector('.screen-darken'));
    });
  });

}); 
