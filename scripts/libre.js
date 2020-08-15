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
  $(".controlador").hide()
  $("#selector").hide()
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
  for(let i = 5; i > 0; i--) {
    switch (i){
      case 5:
        document.getElementById("cronometro").innerHTML = i;    
        break;
      case 4:
        setTimeout(function(){
          document.getElementById("cronometro").innerHTML = i;    
        }, 1000);
        break;
      case 3:
        setTimeout(function(){
          document.getElementById("cronometro").innerHTML = i;    
        }, 2000);
        break;
      case 2:
        setTimeout(function(){
          document.getElementById("cronometro").innerHTML = i;    
        }, 3000);
        break;
      case 1:
        setTimeout(function(){
          document.getElementById("cronometro").innerHTML = i;    
        }, 4000);
        break;
    }
  }
  setTimeout(function(){
    document.getElementById("cronometro").innerHTML = "Rapear";  
    $(".controlador").show()
    $("#selector").show()
  }, 5000)
  setTimeout(function(){
    document.getElementById("cronometro").innerHTML = "";  
  }, 6000)

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