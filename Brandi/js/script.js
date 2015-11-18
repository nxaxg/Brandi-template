$(document).ready(function(){
    header();
    highlight();    
});

function header(){
    var tope = 100; /*from top*/
      $(window).scroll(function() {
        var scroll = posActual(); /*posicion actual*/
        if(scroll >= tope){
               $('header').addClass('small-header'); /*añadir clase si sobrepasa */
            }
            else {
                $('header').removeClass('small-header');
            }
      });
    function posActual  () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
};

function highlight(){
        $("a").click(function() {
          // borra clases de todo anchor
          $("a").removeClass("sel");
          // añade clase a anchor clickeado
          $(this).addClass("sel");
       });
};