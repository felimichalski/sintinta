$("document").ready(function(){
  $.ajax({
    url: "beats.html",
    success: function(data){
      $(".elegir-beat").html(data);
    }
  });
});

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
  cronometrar();
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
  document.getElementById("cronometro").innerHTML = "0";
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
    cronometrar();
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

var opciones = $("#selector").find("option");
function adelantarBeat() {
  for (let i = 0; i < opciones.length; i++) {
    if($("#selector").prop("selectedIndex") === i){
      if(i != opciones.length - 1){
        $("#selector").prop("selectedIndex", i+1);
        i++;
      }
      else {
        $("#selector").prop("selectedIndex", 0);
      }
    }    
  }
  cambiarBeat();
}

function atrasarBeat() {
  for (let i = opciones.length; i > -1; i--) {
    if($("#selector").prop("selectedIndex") === i){
      if(i != 0){
        $("#selector").prop("selectedIndex", i-1);
        i--;
      }
      else {
        $("#selector").prop("selectedIndex", opciones.length - 1);
      }
    }    
  }
  cambiarBeat();
}

var segundos = 0;
function cronometrar() {
  $(".controlador").show();
  $(".controladort").show();
  $("#selector").show();
  if(segundos === 0){
    document.getElementById("cronometro").innerHTML = segundos;
    segundos++
  }
  intervalo = setInterval(function() {
    document.getElementById("cronometro").innerHTML = segundos;
    segundos++;
  }, 1000)
}