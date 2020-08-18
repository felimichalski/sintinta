$("document").ready(function(){
  $.ajax({
    url: "beats.html",
    success: function(data){
      $(".elegir-beat").html(data);
    }
  });
});

var beat;
var reproduccion = false;

function irModo() {
  $("#selector").hide();
  $(".controladort").hide();
  $(".controlador").hide();
  beat = $(".container").find(".activo").parent().attr("id");
  $(".elegir-beat").html("");
  $(".rapear").css("display", "block");
  beat = "a" + beat;
  $("#selector").val(beat).prop('selected', true);
  beat = document.getElementById(beat);
  beat.play();
  reproduccion = true;
  var icono = document.getElementById("icono");
  icono.src = "pause.svg"
  var icono2 = document.getElementById("icono2");
  icono2.src = "pause.svg"
  contador = 3;
  intervalo = window.setInterval(function(){
    document.getElementById("cronometro").innerHTML = contador;
    contador--;
    if(contador === 0){
      clearInterval(intervalo);
      cronometrar()
    }
  }, 1000)
}


function cambiarBeat() {
  beat.pause();
  beat.currentTime = 0;
  var icono = document.getElementById("icono");
  icono.src = "play.svg";
  var icono2 = document.getElementById("icono2");
  icono2.src = "play.svg";
  reproduccion = false;
  clearInterval(intervalo);
  document.getElementById("cronometro").innerHTML = "";
  segundos = 1;
  var seleccion = document.getElementById("selector");
  beat = document.getElementById(seleccion.options[seleccion.selectedIndex].value);
}

function controlarAudio() {
  if(reproduccion === false){
    beat.play()
    reproduccion = true;
    var icono = document.getElementById("icono");
    icono.src = "pause.svg"
    var icono2 = document.getElementById("icono2");
    icono2.src = "pause.svg";
    cronometrar()
  }
  else {
    beat.pause()
    reproduccion = false;
    var icono = document.getElementById("icono");
    icono.src = "play.svg";
    var icono2 = document.getElementById("icono2");
    icono2.src = "play.svg";
    clearInterval(intervalo);
  }
}

function adelantarBeat() {
  beat.currentTime += 5;
}

function atrasarBeat() {
  beat.currentTime -= 5;
}

var segundos = -1;
function cronometrar() {
  setTimeout(function(){
    $(".controlador").show();
    $(".controladort").show();
    $("#selector").show();
  }, 1000)
  intervalo = setInterval(function() {
    if(segundos === -1){
      document.getElementById("cronometro").innerHTML = "Rapear";
      segundos++;
    }
    else if(segundos === 0){
      document.getElementById("cronometro").innerHTML = "";
      segundos++;
    }
    else{
      document.getElementById("cronometro").innerHTML = segundos;
      segundos++;
    }
  }, 1000)
}