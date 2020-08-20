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
  if(intervalo != undefined){
    clearInterval(intervalo);
  }
  $.ajax({
    url: "inicio.html",
    success: function(data){
      $("main").html(data);
    }
  });
  var audios = document.getElementsByTagName("audio");
    for(var i = 0; i < audios.length; i++){
      audios[i].pause();
      audios[i].currentTime = 0;
    }
}

function mostrarBeatmakers() {
  if(intervalo != undefined){
    clearInterval(intervalo);
  }
  $.ajax({
    url: "beatmakers.html",
    success: function(data){
      $("main").html(data);
    }
  })
  var audios = document.getElementsByTagName("audio");
  for(var i = 0; i < audios.length; i++){
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}

function mostrarNosotros() {
  if(intervalo != undefined){
    clearInterval(intervalo);
  }
  $.ajax({
    url: "nosotros.html",
    success: function(data){
      $("main").html(data);
    }
  })
  var audios = document.getElementsByTagName("audio");
  for(var i = 0; i < audios.length; i++){
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}

$(".nav-item").on("click", function(){
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

$(".dropdown-item").on("click", function(){
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
    var icono = document.getElementById("icono");
    icono.src = "play.svg";
    var icono2 = document.getElementById("icono2");
    icono2.src = "play.svg";
    clearInterval(intervalo);
  }
}

var intervalo;
var beat;
var reproduccion = false;