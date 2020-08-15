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
  beat = $(".container").find(".activo").parent().attr("id");
  $(".elegir-beat").html("");
  $(".rapear").css("display", "block");
  beat = "a" + beat;
  $("#selector").val(beat).prop('selected', true);
  beat = document.getElementById(beat);
}

function cambiarBeat() {
  beat.pause();
  beat.currentTime = 0;
  var icono = document.getElementById("icono");
  icono.src = "play.svg"
  reproduccion = false;
  var seleccion = document.getElementById("selector");
  beat = document.getElementById(seleccion.options[seleccion.selectedIndex].value);
}

function controlarAudio() {
  if(reproduccion === false){
    beat.play()
    reproduccion = true;
    var icono = document.getElementById("icono");
    icono.src = "pause.svg"
  }
  else {
    beat.pause()
    reproduccion = false;
    var icono = document.getElementById("icono");
    icono.src = "play.svg";
  }
}