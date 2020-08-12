$("document").ready(function(){
  $.ajax({
    url: "beats.html",
    success: function(data){
      $(".modolibre").html(data);
    }
  });
});

var beat

function irModo() {
  beat = $(".container").find(".activo").parent().attr("id");
  $(".modolibre").html("");
  beat = "a" + beat;
  beat = document.getElementById(beat);
}
