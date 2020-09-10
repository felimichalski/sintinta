function mostrarArtista(e) {
    var nombre = $(e).find("p").html();
    $("#infoCreador").find("h2").html(nombre);
    let div = document.createElement("div");
    div.classList.add("reprod");
    let div2 = document.createElement("div");
    div2.classList.add("reprod");
    var spotify = document.getElementById("spotify");
    var youtube = document.getElementById("youtube");
    var instagram = document.getElementById("instagram");
    var facebook = document.getElementById("facebook");
    switch(nombre){
        case "Suriz":
            youtube.href = "https://www.youtube.com/channel/UCusyN7By5cQ9fUXGlSleKUA";
            instagram.href = "https://www.instagram.com/juansuriz_/"
            youtube.style.display = "";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "none";
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
            spotify.href = "https://open.spotify.com/artist/4XQ10JmZbUZ5xtaWdqWCKy?si=HOeXM8TLRuiP6bNQwX6w6A";
            youtube.href = "https://www.youtube.com/channel/UCQWBI1SJOvKgSwJjmTHF8xQ";
            instagram.href = "https://www.instagram.com/fiiks_serna/";
            facebook.href = "https://www.facebook.com/elfiiks";
            spotify.style.display = "";
            instagram.style.display = "";
            facebook.style.display = "";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCU1juS_FY4xAw9Xz3145HHg";
            spotify.href = "https://open.spotify.com/artist/1Lrtr13hDQzHEwujnl6Qem?si=fJVYZI0ERvmCGsMcViOXKw";
            instagram.href = "https://www.instagram.com/madhousecolombia/";
            facebook.href = "https://www.facebook.com/madhousecolombia/";
            spotify.style.display = "";
            instagram.style.display = "";
            facebook.style.display = "";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCj_ZK8Mb7Rqv0K8Awm3sk8w";
            instagram.href = "https://www.instagram.com/casegprod/";
            facebook.href = "https://www.facebook.com/casegmusic/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UC_azaunul8LyqZq4jX1DrpA";
            instagram.href = "https://www.instagram.com/KhronosBeats/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCHFBAsf05OVgGRh27MmvAIQ";
            instagram.href = "https://www.instagram.com/beatmosferah/?hl=es-la";
            spotify.href = "https://open.spotify.com/artist/3ohaPKlPHgPUv3yAsTiXr5?si=WybcITtbQRG1haHdjwrxHg";
            spotify.style.display = "";
            instagram.style.display = "";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCt6Q3DxZyd91ooizJn5_Paw";
            instagram.href = "https://www.instagram.com/sosa808_/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/user/HantBeat";
            instagram.href = "https://www.instagram.com/hanto.beatmaker/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCtohpFjPh6PO2B5PwutQEiQ";
            spotify.style.display = "none";
            instagram.style.display = "none";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCzcwJapoT0na5BnmLXK3_3Q";
            instagram.href = "https://www.instagram.com/rey.pandora/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCLBM9aUyxTIAgwiFMRwZglQ";
            instagram.href = "https://www.instagram.com/rapbattleens/?hl=es-la";
            facebook.href = "https://www.facebook.com/RapbatlleEns/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCxJtwLCFYz0482zRQEL1nhA";
            spotify.href = "https://open.spotify.com/artist/1jRF8rcj4TMuVQR9PWnpFm?si=Si1zWDqORjaSAD0SlXe-qw";
            spotify.style.display = "";
            instagram.style.display = "none";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCXdpkpdToowHQhRZX_6haRg";
            instagram.href = "https://www.instagram.com/sevenking00/";
            spotify.style.display = "none";
            instagram.style.display = "";
            facebook.style.display = "none";
            youtube.style.display = "";
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
            youtube.href = "https://www.youtube.com/channel/UCMyxJuCMG6z0uMNb6HxJrdQ";
            spotify.style.display = "none";
            instagram.style.display = "none";
            facebook.style.display = "none";
            youtube.style.display = "";
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
}

$("#infoCreador").on('hidden.bs.modal', function() {
    $("#infoCreador").find("h2").html("");
    $("#infoCreador").find(".creaciones").html("");
    $("#infoCreador").find(".redes").html("");
})