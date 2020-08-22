$("document").ready(function(){
  $.ajax({
    url: "inicio.html",
    success: function(data){
      $("main").html(data);
    }
  });
});

function desplegarMenu() {
  if($(".dropdown-menu").css("opacity") == 0){
    $(".dropdown-menu").css("opacity", "1");
    $(".dropdown-menu").css("visibility", "visible");
    $(".overlay").css("visibility", "visible");
  }
  else {
    $(".dropdown-menu").css("opacity", "0")
    $(".dropdown-menu").css("visibility", "hidden");
    $(".overlay").css("visibility", "hidden");
  }
}

function ocultarDesplegable() {
  $(".dropdown-menu").css("opacity", "0")
  $(".dropdown-menu").css("visibility", "hidden");
  $(".overlay").css("visibility", "hidden");
}

function mostrarIncio() {
  $.ajax({
    url: "inicio.html",
    success: function(data){
      $("main").html(data);
    }
  });
}

function mostrarBeatmakers() {
  $.ajax({
    url: "beatmakers.html",
    success: function(data){
      $("main").html(data);
    }
  })
}

function mostrarNosotros() {
  $.ajax({
    url: "nosotros.html",
    success: function(data){
      $("main").html(data);
    }
  })
}

$(".nav-item").on("click", function(){
  frenarBeat();
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

$(".dropdown-item").on("click", function(){
  frenarBeat();
   $(".navbar-nav").find(".active").removeClass("active");
   switch (this.innerText) {
     case "Inicio":
      var modo = $(".navbar-nav").children()[0];
      modo.classList.add("active");
      break;
    case "Beatmakers":
      var modo = $(".navbar-nav").children()[1];
      modo.classList.add("active");
      break;
    case "¿Quiénes somos?":
      var modo = $(".navbar-nav").children()[2];
      modo.classList.add("active");
      break;
   }
});

function modoLibre(){
   $(".navbar-nav").find(".active").removeClass("active");
  $.ajax({
    url: "libre.html",
    success: function(data){
      $("main").html(data);
    }
  })
}

function modoPalabras(){
  $(".navbar-nav").find(".active").removeClass("active");
 $.ajax({
   url: "palabras.html",
   success: function(data){
     $("main").html(data);
   }
 })
}

function frenarBeat() {
  var audios = document.getElementsByTagName("audio");
  for(var i = 0; i < audios.length; i++){
    audios[i].pause();
    reproduccion = false;
  }
  if(intervalo != undefined){
    clearInterval(intervalo);
  }
  segundos = 0;
}

var intervalo;
var beat;
var reproduccion = false;
var segundos = 0;
var contPalabras;