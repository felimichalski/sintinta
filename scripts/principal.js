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
  })
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
