function mostrarArtista(e) {
    var nombre = $(e).find("p").html();
    $("#infoCreador").find("h2").html(nombre);
    let insta = document.createElement("a");
    insta.classList.add("btn-social");
    insta.classList.add("btn-instagram");
    let instagram = document.createElement("i");
    instagram.classList.add("fa");
    instagram.classList.add("fa-instagram");
    insta.append(instagram)
    let yt = document.createElement("a");
    yt.classList.add("btn-social");
    yt.classList.add("btn-youtube");
    let youtube = document.createElement("i");
    youtube.classList.add("fa");
    youtube.classList.add("fa-youtube");
    yt.append(youtube)
    let div = document.createElement("div");
    div.classList.add("reprod");
    let div2 = document.createElement("div");
    div2.classList.add("reprod");
    console.log(nombre);
    switch(nombre){
        case "Suriz":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("aloufai");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aloufai");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.addEventListener("mouseover", function(){
                let beat = document.getElementById("aenesa");
                beat.play();
            })
            div2.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aenesa");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.style.marginLeft = "2rem";
            $("#infoCreador").find(".creaciones").append(div, "Lou Fai", div2, "En Esa");
            break;
        case "Fiiks Beats":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("ahipocresia");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("ahipocresia");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Hipocresia")
            break;
        case "Mad House Music":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("atraficando");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("atraficando");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.addEventListener("mouseover", function(){
                let beat = document.getElementById("afreestyle");
                beat.play();
            })
            div2.addEventListener("mouseleave", function(){
                let beat = document.getElementById("afreestyle");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.style.marginLeft = "2rem";
            $("#infoCreador").find(".creaciones").append(div, "Traficando Rimas", div2, "Freestyle");
            break;
        case "Case G Music":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("adesdeelbarrio");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("adesdeelbarrio");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.addEventListener("mouseover", function(){
                let beat = document.getElementById("aunderground");
                beat.play();
            })
            div2.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aunderground");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.style.marginLeft = "2rem";
            $("#infoCreador").find(".creaciones").append(div, "Desde El Barrio", div2, "Underground Kings");
            break;
        case "Khronos Beats":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("ahammer");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("ahammer");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.addEventListener("mouseover", function(){
                let beat = document.getElementById("amoresmoke");
                beat.play();
            })
            div2.addEventListener("mouseleave", function(){
                let beat = document.getElementById("amoresmoke");
                beat.pause();
                beat.currentTime = 0;
            })
            div2.style.marginLeft = "2rem";
            $("#infoCreador").find(".creaciones").append(div, "Hammer", div2, "More Smoke");
            break;
        case "Beatmosferah":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("aesperanza");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aesperanza");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Esperanza")
            break;
        case "Prod. Sosa":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("abigmesita");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("abigmesita");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Big Soto x Mesita Type Beat")
            break;
        case "Hanto Beatmaker":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("abruja");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("abruja");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Bruja")
            break;
        case "Zone Beats":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("aparaustedes");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aparaustedes");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Para Ustedes")
            break;
        case "Rey Pandora Beats":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("acebado");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("acebado");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Cebado")
            break;
        case "Rapbattle Ens":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("aimperio");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aimperio");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Imperio")
            break;
        case "Nerso &amp; Verse":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("aleyendas");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aleyendas");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Leyendas Urbanas")
            break;
        case "Seven":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("aelbarto");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("aelbarto");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "El Barto")
            break;
        case "Tavo Rose Beats":
            div.addEventListener("mouseover", function(){
                let beat = document.getElementById("atruenalo");
                beat.play();
            })
            div.addEventListener("mouseleave", function(){
                let beat = document.getElementById("atruenalo");
                beat.pause();
                beat.currentTime = 0;
            })
            $("#infoCreador").find(".creaciones").append(div, "Truenalo")
            break;
    }
    $("#infoCreador").find(".redes").append("<br /><br />", insta, yt);
}

$("#infoCreador").on('hidden.bs.modal', function() {
    $("#infoCreador").find("h2").html("");
    $("#infoCreador").find(".creaciones").html("");
    $("#infoCreador").find(".redes").html("");
})