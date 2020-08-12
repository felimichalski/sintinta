$(".cajabeat").on("click", function(){
  $(".container").find(".activo").removeClass("activo");
  $(".container").find("img").remove();
  var acti = document.createElement("div");
  acti.classList.add("activo");
  var icono = document.createElement("img");
  icono.src = "check.svg";
  $(this).append(acti);
  $(".activo").append(icono);
  $(".desplegar").css("display", "flex");
});

$("#loufai").mouseover(function(){
  $("#loufai .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#loufai").is(":hover")){
      var beat = document.getElementById("aloufai");
      beat.play();
    }
  }, 700);
})
$("#loufai").mouseleave(function(){
  var beat = document.getElementById("aloufai");
  beat.pause();
  beat.currentTime = 0;
  $("#loufai .oscurecer").css("visibility", "hidden");
})

$("#enesa").mouseover(function(){
  $("#enesa .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#enesa").is(":hover")){
      var beat = document.getElementById("aenesa");
      beat.play();
    }
  }, 700);
})
$("#enesa").mouseleave(function(){
  var beat = document.getElementById("aenesa");
  beat.pause();
  beat.currentTime = 0;
  $("#enesa .oscurecer").css("visibility", "hidden");
})

$("#desdeelbarrio").mouseover(function(){
  $("#desdeelbarrio .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#desdeelbarrio").is(":hover")){
      var beat = document.getElementById("adesdeelbarrio");
      beat.play();
    }
  }, 700);
})
$("#desdeelbarrio").mouseleave(function(){
  var beat = document.getElementById("adesdeelbarrio");
  beat.pause();
  beat.currentTime = 0;
  $("#desdeelbarrio .oscurecer").css("visibility", "hidden");
})

$("#freestyle").mouseover(function(){
  $("#freestyle .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#freestyle").is(":hover")){
      var beat = document.getElementById("afreestyle");
      beat.play();
    }
  }, 700);
})
$("#freestyle").mouseleave(function(){
  var beat = document.getElementById("afreestyle");
  beat.pause();
  beat.currentTime = 0;
  $("#freestyle .oscurecer").css("visibility", "hidden");
})

$("#hammer").mouseover(function(){
  $("#hammer .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#hammer").is(":hover")){
      var beat = document.getElementById("ahammer");
      beat.play();
    }
  }, 700);
})
$("#hammer").mouseleave(function(){
  var beat = document.getElementById("ahammer");
  beat.pause();
  beat.currentTime = 0;
  $("#hammer .oscurecer").css("visibility", "hidden");
})

$("#hipocresia").mouseover(function(){
  $("#hipocresia .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#hipocresia").is(":hover")){
      var beat = document.getElementById("ahipocresia");
      beat.play();
    }
  }, 700);
})
$("#hipocresia").mouseleave(function(){
  var beat = document.getElementById("ahipocresia");
  beat.pause();
  beat.currentTime = 0;
  $("#hipocresia .oscurecer").css("visibility", "hidden");
})

$("#moresmoke").mouseover(function(){
  $("#moresmoke .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#moresmoke").is(":hover")){
      var beat = document.getElementById("amoresmoke");
      beat.play();
    }
  }, 700);
})
$("#moresmoke").mouseleave(function(){
  var beat = document.getElementById("amoresmoke");
  beat.pause();
  beat.currentTime = 0;
  $("#moresmoke .oscurecer").css("visibility", "hidden");
})

$("#traficando").mouseover(function(){
  $("#traficando .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#traficando").is(":hover")){
      var beat = document.getElementById("atraficando");
      beat.play();
    }
  }, 700);
})
$("#traficando").mouseleave(function(){
  var beat = document.getElementById("atraficando");
  beat.pause();
  beat.currentTime = 0;
  $("#traficando .oscurecer").css("visibility", "hidden");
})

$("#underground").mouseover(function(){
  $("#underground .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#underground").is(":hover")){
      var beat = document.getElementById("aunderground");
      beat.play();
    }
  }, 700);
})
$("#underground").mouseleave(function(){
  var beat = document.getElementById("aunderground");
  beat.pause();
  beat.currentTime = 0;
  $("#underground .oscurecer").css("visibility", "hidden");
})

$("#truenalo").mouseover(function(){
  $("#truenalo .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#truenalo").is(":hover")){
      var beat = document.getElementById("atruenalo");
      beat.play();
    }
  }, 700);
})
$("#truenalo").mouseleave(function(){
  var beat = document.getElementById("atruenalo");
  beat.pause();
  beat.currentTime = 0;
  $("#truenalo .oscurecer").css("visibility", "hidden");
})

$("#bigmesita").mouseover(function(){
  $("#bigmesita .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#bigmesita").is(":hover")){
      var beat = document.getElementById("abigmesita");
      beat.play();
    }
  }, 700);
})
$("#bigmesita").mouseleave(function(){
  var beat = document.getElementById("abigmesita");
  beat.pause();
  beat.currentTime = 0;
  $("#bigmesita .oscurecer").css("visibility", "hidden");
})

$("#bruja").mouseover(function(){
  $("#bruja .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#bruja").is(":hover")){
      var beat = document.getElementById("abruja");
      beat.play();
    }
  }, 700);
})
$("#bruja").mouseleave(function(){
  var beat = document.getElementById("abruja");
  beat.pause();
  beat.currentTime = 0;
  $("#bruja .oscurecer").css("visibility", "hidden");
})

$("#cebado").mouseover(function(){
  $("#cebado .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#cebado").is(":hover")){
      var beat = document.getElementById("acebado");
      beat.play();
    }
  }, 700);
})
$("#cebado").mouseleave(function(){
  var beat = document.getElementById("acebado");
  beat.pause();
  beat.currentTime = 0;
  $("#cebado .oscurecer").css("visibility", "hidden");
})

$("#imperio").mouseover(function(){
  $("#imperio .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#imperio").is(":hover")){
      var beat = document.getElementById("aimperio");
      beat.play();
    }
  }, 700);
})
$("#imperio").mouseleave(function(){
  var beat = document.getElementById("aimperio");
  beat.pause();
  beat.currentTime = 0;
  $("#imperio .oscurecer").css("visibility", "hidden");
})

$("#elbarto").mouseover(function(){
  $("#elbarto .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#elbarto").is(":hover")){
      var beat = document.getElementById("aelbarto");
      beat.play();
    }
  }, 700);
})
$("#elbarto").mouseleave(function(){
  var beat = document.getElementById("aelbarto");
  beat.pause();
  beat.currentTime = 0;
  $("#elbarto .oscurecer").css("visibility", "hidden");
})

$("#leyendas").mouseover(function(){
  $("#leyendas .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#leyendas").is(":hover")){
      var beat = document.getElementById("aleyendas");
      beat.play();
    }
  }, 700);
})
$("#leyendas").mouseleave(function(){
  var beat = document.getElementById("aleyendas");
  beat.pause();
  beat.currentTime = 0;
  $("#leyendas .oscurecer").css("visibility", "hidden");
})

$("#esperanza").mouseover(function(){
  $("#esperanza .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#esperanza").is(":hover")){
      var beat = document.getElementById("aesperanza");
      beat.play();
    }
  }, 700);
})
$("#esperanza").mouseleave(function(){
  var beat = document.getElementById("aesperanza");
  beat.pause();
  beat.currentTime = 0;
  $("#esperanza .oscurecer").css("visibility", "hidden");
})

$("#paraustedes").mouseover(function(){
  $("#paraustedes .oscurecer").css("visibility", "visible");
  setTimeout(function(){
    if($("#paraustedes").is(":hover")){
      var beat = document.getElementById("aparaustedes");
      beat.play();
    }
  }, 700);
})
$("#paraustedes").mouseleave(function(){
  var beat = document.getElementById("aparaustedes");
  beat.pause();
  beat.currentTime = 0;
  $("#paraustedes .oscurecer").css("visibility", "hidden");
})
