$("document").ready(function(){
  $.ajax({
    url: "beats.html",
    success: function(data){
      $(".elegir-beat").html(data);
    }
  });
});

$(".controladort").hover(() => {
  $(".controladores").find(".nombre").removeClass("d-none");
}, () => {
  $(".controladores").find(".nombre").addClass("d-none");
})

function irModo() {
  let posicioninicial = window.scrollY;
  if(posicioninicial != 0){
    $("body, html").animate({
      scrollTop: "0px"
    }, 0)
  }
  beat = $(".container").find(".activo").parent().attr("id");
  $(".elegir-beat").html("");
  $(".rapear").css("display", "block");
  beat = "a" + beat;
  beat = document.getElementById(beat);
  beat.play();
  reproduccion = true;
  var icono = document.getElementById("icono");
  icono.src = "pause.svg"
  var icono2 = document.getElementById("icono2");
  icono2.src = "pause.svg"
  var palabra = arrPalabras[Math.floor(Math.random() * 3395) + 1];
  contPalabras.innerHTML = palabra;
  palabra = palAnterior;
  cronometrar();
  beat.addEventListener("ended", () => {
    cambiarBeat();
  });
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

function adelantarBeat() {
  cambiarBeat();
  var audios = document.getElementsByTagName("audio");
  for (let i = 0; i < audios.length; i++) {
    if(beat === audios[i]){
      if(i === audios.length - 1){
        beat = audios[0];
      }
      else {
        beat = audios[i+1];
        i++
      }
    }
  }
}

function atrasarBeat() {
  cambiarBeat();
  var audios = document.getElementsByTagName("audio");
  for (let i = 0; i < audios.length; i++) {
    if(beat === audios[i]){
      if(i === 0){
        beat = audios[audios.length - 1];
        break;
      }
      else {
        beat = audios[i-1];
      }
    }
  }
}

function cronometrar() {
  if(segundos === 0){
    document.getElementById("cronometro").innerHTML = segundos;
    segundos++
  }
  intervalo = setInterval(function() {
    document.getElementById("cronometro").innerHTML = segundos;
    segundos++;
  }, 1000)
}

contPalabras = document.getElementById("cont-palabras");
var palAnterior;
function cambiarPalabra() {
  var palabra = arrPalabras[Math.floor(Math.random() * 3395) + 1];
  if(palabra != palAnterior){
    contPalabras.innerHTML = palabra;
  }
  palabra = palAnterior;
}



var arrPalabras = [
      "abalanzar", "abandonado", "abandonar", "abanico", "abarrotar", "abarrotado", "abdomen", "abdominal", "abdicar", "abducción", "abducir",
      "abedul", "abecedario", "abeja", "aberración", "aberrante", "abeto", "abierto", "abismal", "abismo", "abnegar", "abogado", "abofetear", "abolición",
      "abono", "abonado", "abordar", "abordaje", "aborrecer", "aborto", "abortar", "abrir", "abrasado", "abrazar", "abrazo", "abrebotellas", "abrelatas",
      "abreviación", "abreviado", "abreviatura", "abrigo", "abrigado", "absenta", "absoluto", "absorber", "absorbente", "abstención", "abstenerse", "abstracto",
      "absuelto", "absurdo", "abucheo", "abuelo", "abuela", "abundancia", "abundante", "aburrido", "abusado", "abusón", "abusar", "abuso", "acá", "acabado",
      "acabar", "academia", "académico", "acalorado", "acampada", "acampar", "acaparar", "acariciar", "acantilado", "acorralar", "acorralado", "acarrear", "acceso",
      "accidente", "accidental", "accidentado", "acceder", "accidentalmente", "aceituna", "acelerar", "acelerado", "acento", "aceptar", "aceptable", "acero", "acertar",
      "achicharrado", "ácido", "acción", "aclamado", "aclamar", "aclarar", "acobardado", "acoger", "acogido", "acogedor", "acojonar", "acojonado", "acompañante",
      "acompañar", "acomplejar", "acomplejado", "acorazado", "acosador", "acosado", "acostumbrado", "acreditación", "acrobacia", "actitud", "actuar", "activo", "activar",
      "actividad", "actual", "actualidad", "actualización", "acuchillar", "acuchillado", "acuerdo", "acumulación", "acusación", "acusado", "acusador", "Adán", "adaptar",
      "adefesio", "adelantamiento", "adelantar", "adhesivo", "adentro", "adicción", "adicto", "adiestrar", "adivino", "adivinar", "adivinanza", "adjetivo",
      "administración", "administrador", "administrar", "admirar", "admisión", "admitido", "adolescente", "adolecencia", "adondequiera", "adopción", "adoptado", "adoptar",
      "adorable", "adrenalina", "aduana", "adulto", "adversidad", "advertencia", "advertido", "advertir", "adverso", "aerobic", "aerodinámico", "aerolínea", "aeropuerto", "afán",
      "afecto", "afectar", "afeitado", "afeminado", "afición", "afirmar", "afirmación", "afirmativo", "aflojar", "afuera", "agallas", "agarrar", "agarrón", "agencia", "agente",
      "agobio", "agonía", "agua", "aguante", "aguardiente", "águila", "ángel", "ánimo", "árbitro", "árabe", "árbol", "átomo", "ahogar", "ahogado", "ahorcar", "ahorcado", "ahorro",
      "ahorrado", "ahuecar", "ahumado", "ahuyentar", "aire", "airbag", "aislado", "aislamiento", "ajedrez", "ajeno", "ajo", "ajustado", "ajusticiado", "ajustar", "alabanza",
      "alas", "alardear", "alarma", "alcalde", "alcanzar", "alcohol", "alcohólico", "aldea", "aldeano", "aleatorio", "alegre", "alegría",
      "alemán", "alentar", "alergia", "alerta", "alfa", "alfabeto", "alfombra", "algas", "algodón", "alguno", "alienígena", "alimento",
      "allá", "allí", "alma", "almacén", "almacenar", "almirante", "alocado", "alojamiento", "alrededor", "alto", "altercado", "altibajo",
      "altura", "alucinar", "alucinado", "alucinación", "alumno", "amo", "amar", "amado", "amable", "amamantar", "amariconado", "amasar",
      "amateur", "ambición", "ambiente", "amenaza", "amenazar", "americano", "ametralladora", "amnesia", "amor", "amortiguación",
      "ampliar", "ampliación", "amplificador", "amputar", "amputado", "amuleto", "anaconda", "analista", "análisis", "analizar",
      "anatomía", "ancla", "andar", "anécdota", "anestesia", "anexión", "anfetamina", "angelical", "anglosajón", "angustia", "animación",
      "animal", "anillo", "aniversario", "ano", "anochecer", "ansiedad", "anterior", "antena", "antepasados", "antibiótico", "anticipado",
      "anticomunista", "anticonceptivo", "anticristo", "antidemocrático", "antidroga", "antiesclavista", "antifascista", "antiguo",
      "antigüedad", "antimonárquico", "antinacionalista", "antirreligioso", "antirracista", "antisemita", "antisistema", "antiviolencia",
      "antorcha", "anuncio", "año", "apagar", "aparato", "aparcamiento", "aparición", "apartamento", "apartar", "apasionante", "apellido",
      "apetito", "apto", "aptitud", "apocalipsis", "apostar", "apuesta", "apuñalar", "apuñalado", "aquello", "araña", "archiduque", "arder",
      "arena", "argumento", "arma", "aro", "aroma", "arsenal", "artísta", "artículo", "artificial", "As", "asar", "asado", "asalto", "asaltar",
      "ascender", "ascensión", "asco", "asegurar", "aseo", "asfalto", "asfixiar", "asiento", "asistencia", "asociación", "aspecto", "aspirante",
      "asqueroso", "asquerosidad", "astronauta", "astuto", "asustar", "asustado", "atacar", "atacante", "atajar", "atajo", "ataque",
      "atar", "atado", "atasco", "ateo", "atención", "atento", "aterrizaje", "aterrorizado", "atún", "autoridad", "autorización", "audio",
      "aumento", "ausente", "auténtico", "autista", "auto", "automático", "autopista", "avance", "avaricioso", "avellaneda", "aventura",
      "avería", "avestruz", "avión", "avisar", "aviso", "avispa", "ayer", "ayuda", "azafata", "azote", "azul", "bacanal", "bachiller",
      "bachillerato", "bacteria", "bahía", "bailar", "baile", "bajar", "bala", "balada", "ballena", "balón", "baloncesto", "bandeja", "bandera",
      "bandido", "bar", "barato", "barbacoa", "barba", "base", "bastante", "basura", "batalla", "batallar", "batería", "bautismo", "bautizar",
      "bebé", "beber", "baseball", "belleza", "bella", "bendecir", "bendición", "beneficio", "besar", "beso", "bestia", "bestial",
      "biblioteca", "bicicleta", "bigote", "biología", "bipolar", "birra", "bisexual", "bisexualidad", "bobo", "boca", "bodega", "boicot",
      "bola", "boleto", "boludo", "boludez", "bomba", "bombardeo", "bombero", "bombilla", "bombón", "bonito", "borracho", "borrachera", "borrar",
      "bosque", "botella", "botón", "burbuja", "caballo", "caballero", "cabello", "cabeza", "cadáver", "caer", "café", "cafetería",
      "cagar", "cagada", "caja", "calavera", "calzón", "cálculo", "callar", "calle", "calma", "caos", "capital", "capitalismo", "capricho",
      "calor", "cama", "cambio", "cambiar", "cámara", "camino", "caminante", "camisa", "canal", "cancelar", "canción", "candidato", "caníbal",
      "caña", "cara", "característica", "caramelo", "carbonara", "casa", "casado", "casi", "castellano", "castillo", "castigo", "castigar",
      "casual", "catástrofe", "categoría", "católica", "causa", "caverna", "cavernícola", "cazar", "cazador", "celebración", "ceja", "celestial",
      "celular", "celebrar", "cementerio", "centímetro", "central", "cerebro", "ceremonia", "cerrar", "cerrado", "cerdo", "chequear", "chocolate",
      "ciego", "ciencia", "científico", "cinco", "circo", "círculo", "circular", "cirujía", "ciudad", "ciudadano", "civil", "claro", "clase",
      "clásico", "clima", "cobarde", "cobardía", "cocaína", "concha", "cocinar", "cocina", "coger", "copa", "copiar", "copia", "corazón", "cosa", "coste",
      "costilla", "cuadra", "cualquiera", "corral", "correcto", "corrección", "corregir", "corriente", "colaboración", "cola", "colección", "coleccionar",
      "colegio", "colgar", "colisión", "color", "colonizar", "colonizador", "colonización", "concentración", "conciencia", "concurso", "comandante", "combate",
      "combatiente", "combatir", "combinación", "comer", "comerciar", "comerciante", "comienzo", "culo", "cuchillo", "cuento", "cuerno", "culpa", "culpable",
      "cultivo", "cultura", "curso", "curioso", "curva", "danza", "daño", "debate", "debatir", "débil", "debilidad", "debut", "decapitar", "decapitado", "decidir",
      "decisión", "dedos", "dedicatoria", "defecto", "defensa", "defensor", "definición", "degollar", "delantero", "delfín", "delgado", "delicia", "delito", "democracia",
      "demonio", "denuncia", "departamento", "dependencia", "depilar", "depilación", "deplorable", "deportado", "deporte",
      "deportista", "deportivo", "deportividad", "depravado", "depredador", "depresión", "depresivo", "derecha", "derechazo",
      "derogar", "derrapar", "derrape", "derretido", "derrochador", "derrota", "derrotar", "derrotado", "desabastecimiento",
      "desabrochar", "desacato", "desacompasado", "desactivar", "desactivado", "desafiar", "desafío", "desafiante", "desafinar", "desafortunada",
      "desagradable", "desagradecido", "desahucio", "desbloqueado", "descabalgar", "descalzo", "descaro", "descargar", "descarte",
      "descendiente", "descendencia", "descenso", "descender", "descifrar", "descolonizar", "descomponerse", "descomposición", "desconcierto", "desconcertante", "desconectar", "desconectado",
      "desconexión", "desconfianza", "desconfiado", "descongestión", "desconfianza", "descontento", "descontrol", "descontrolado",
      "desordenado", "descripción", "desorden", "crucificar",
      "descubrimiento", "descubrir", "descubridor", "descubierto", "descuento", "descontar", "deseo", "desear", "desembolsar", "desempaquetar", "desesperado", "desfase", "desfavorable", "desfigurar", "desfile",
      "desgarro", "desgastar", "desgaste", "desgracia", "deshacer", "deshecho", "desheredado", "deshidratado", "deshinchar", "deshonesto", "deshumanizado", "desigual", "desigualdad", "desilusión", "desinfectar", "desinfectante", "desintegrar", "desistir", "desintoxicación", "desliz",
      "deslumbrar", "desmaquillar", "desmayo", "desmontar", "desmoralizar", "desnuda", "desnudo", "desnudar", "desobediencia", "desobedecer", "desordenado", "desorganizado", "despacho", "despachar", "desperdiciar", "despacio", "desperdiciar", "desperfecto", "despiadado", "despido", "despoblado",
      "destacar", "destierro", "destino", "destrozo", "destruir", "detalle", "detener", "detenido", "deuda", "diablo", "diabólico", "diagnóstico", "diamante", "dibujar", "dibujo", "dieta", "diente", "diferencia", "diferente", "difícil", "dificultad", "digestión", "digital", "dignidad", "diluvio",
      "dimisión", "dimitir", "dinamita", "dinero", "dinastía", "dios", "dinosaurio", "diplomático", "dirección", "dirigir", "dirigente", "discapacidad", "disciplina", "discoteca", "discriminación", "disculpa", "discurso", "disfraz", "disfrutar", "disimular", "disminuir", "diversidad",
      "diversión", "dividir", "división", "divorcio", "doblar", "doctor", "documento", "dólar", "dolor", "dolorido", "domesticar", "dominar", "donación", "duda", "dudar", "dudoso", "dueño", "dulce", "eclipse", "ecologista", "economía", "edad", "edificio", "educar", "educación", "efectivo", "efecto", "eficacia",
      "ejecución", "ejemplo", "ejercicio", "ejército", "elaboración", "elección", "electricidad", "elegante", "elegir", "elemento", "elevar", "ella", "embarazo", "embarazada", "enano", "encadenar", "enfado", "enfermo", "engordar", "enigma", "enlace", "enloquecer", "enmascarado", "enorme", "ensangrentado",
      "ensayo", "enseñar", "ensuciar", "entrenar", "entrenamiento", "enterrar", "entierro", "epidemia", "equilibrio", "equipo", "equivocado", "erección", "erótico", "error", "erupción", "escalofrío", "escándalo", "escena", "esdrújula", "esencia", "esfera", "esfuerzo", "esnifar", "espacio", "espada", "español",
      "española", "especial", "especialidad", "especie", "espectáculo", "espía", "espíritu", "espiritual", "esponja", "esposa", "espuma", "esquema", "esquizofrenia", "estabilidad", "estación", "eterno", "eternidad", "euforia", "Euro", "Evangelio", "evento", "evolución", "exacto", "exagerado", "excepción",
      "exceso", "excitado", "exclamación", "exclusivo", "excomunión", "excremento", "excusa", "eyacular", "fábrica", "fácil", "facultad", "falso", "fallo", "falsedad", "falta", "fama", "familia", "famoso", "fórmula", "familiar", "fans", "fantasía", "fantasma", "farmacia", "faro", "fascista", "fascismo",
      "fastidio", "fatiga", "fatal", "fatalidad", "fauna", "fe", "feo", "fea", "fecundar", "fecundado", "federal", "federación", "felación", "felicidad", "felicitar", "feliz", "felicitación", "femenino", "feminista", "fenómeno", "feria", "feroz", "ferrocarril", "ferry", "fértil", "fertilidad", "festival",
      "feto", "fetiche", "feudo", "fiable", "fianza", "fibra", "ficción", "fichar", "fichaje", "ficha", "fidelidad", "fideo", "fiera", "fiesta", "festejar", "figura", "fijar", "fila", "filántropo", "filete", "filosofía", "filosofar", "filtro", "fin", "final", "finalizar", "finanzas", "fingir", "finiquito",
      "firma", "firmar", "fiscal", "fiscalía", "flaca", "flaco", "flagelado", "flamenco", "flauta", "flautista", "flecha", "flexible", "flipar", "flojo", "flor", "flores", "flequillo", "fluido", "flujo", "fluir", "fobia", "foco", "fogata", "folclore", "folio", "follar", "follada", "fomentar", "fomentar", "fonética", "fontanero", "foro", "forcejeo", "forestal", "formador", "formalidad", "formatear", "formulación", "fornicar", "fornicación", "forofo",
      "fortaleza", "fortuna", "fortuito", "forzar", "forzado", "fracción", "fractura", "frágil", "fraile", "francés", "fraternal", "fraternidad", "fraude", "frecuente", "frecuentar", "fregar", "freír", "freidora", "frondoso", "frontal", "frontera", "fruta", "fruto", "fuel", "fuelle",
      "fuera", "fuerte", "fuga", "fulana", "fumador", "fumar", "fumado", "fumigar", "función", "funcionar", "funda", "fundamental", "fundamentalismo", "fundar", "funeraria", "furcia", "furia", "furtivo", "fusil", "fusionar", "futbolín", "futbolero", "futuro", "futurista", "águila", "ágora", "álbum", "álgido",
      "ángel", "árabe", "árbol", "área", "bálsamo", "básico", "boxer", "búnker", "búsqueda", "cámara", "cáncer", "cáñamo", "cáscara", "brújula", "célebre", "cíclico", "cínico", "círculo", "código", "cómico", "cómodo", "cómplice", "cósmico", "cúpula", "cúspide", "clérigo", "cráter", "cráneo", "crédito", "crítica",
      "blanco", "blando", "blasfemia", "blasfemar", "bloqueo", "braga", "brazo", "bravo", "breve", "bromo", "bronca", "bronceado", "bruja", "bruto", "brutal", "creación", "crecer", "crema", "crepúsculo", "crianza", "crimen", "criminal", "dragón", "drama", "droga", "drogar", "drogado", "drogodependiente", "débil",
      "déficit", "dócil", "dúo", "épico", "ético", "éxtasis", "éxito", "éxodo", "fábrica", "fármaco", "fémina", "fértil", "fétido", "fórmula", "fútbol", "fúnebre", "gafa", "gala", "galáctico", "galardón", "galaxia", "gallego", "galera", "gallo", "gallina", "gamba", "gambeta", "ganar", "ganancia", "garantizar",
      "garantía", "garra", "garrapata", "gas", "gaseoso", "gasto", "gasolina", "gastar", "gastronomía", "gato", "gatillo", "gaucho", "chófer", "chévere", "gel", "gelatina", "gemelos", "gemir", "gemido", "gen", "general", "generador", "generación", "genética", "genial", "gentil", "geografía", "geográfico",
      "geométrico", "geometría", "gerente", "gesta", "gesto", "gesticular", "guacamole", "guapo", "guapa", "guardia", "guardar", "guarnición", "guarro", "guerra", "guerrero", "guerrilla", "guepardo", "guía", "guión", "guisado", "guitarra", "guiño", "gusano", "gustar", "gustos", "géiser", "gitano", "gigante",
      "gimnasia", "ginecólogo", "giro", "gobernante", "gobierno", "gobernar", "gol", "golf", "golfo", "golpe", "golpear", "goma", "gordo", "gorda", "gordito", "gota", "gotear", "gourmet", "género", "gélido", "gótico", "grabación", "grabar", "gracia", "gracioso", "grada", "grado", "graduación", "granada",
      "granero", "grande", "grandioso", "grasa", "gremio", "grito", "gritar", "gráfico", "grotesco", "gruñido", "grupo", "glaciar", "globo", "globalización", "glorioso", "gloria", "habano", "habilidad", "habilidoso", "habitable", "hablar", "habitante", "hacha", "hacienda", "halcón", "hambre", "hambruna",
      "harakiri", "hartazgo", "hastío", "hazaña", "hechizo", "helado", "helio", "heredar", "herencia", "hereje", "herido", "herida", "hermano", "hermana", "héroe", "heroicidad", "heroína", "herradura", "herramienta", "herrero", "herradura", "heterosexual", "heces", "hilo", "hidratante", "hidrológico",
      "hidrógeno", "higo", "higiene", "hijo", "hija", "himno", "hinchar", "hindú", "hiperactivo", "hipnotizado", "hipoteca", "hipótesis", "hispanidad", "hispanoamericano", "hispanoparlante", "histeria", "historia", "histórico", "historiador", "hito", "hogar", "hoja", "hombre", "homenaje", "homicida",
      "homicidio", "homsexual", "hospital", "hostia", "hostil", "hotel", "huracán", "hueco", "huelga", "huella", "huérfano", "hueso", "huevo", "huida", "huir", "humo", "humanidad", "humedad", "humildad", "humilde", "humor", "humo", "humorista", "hundir", "hundimiento", "hurto", "hábito",
      "húmedo", "ibérico", "iceberg", "icono", "idea", "idéntico", "idea", "identificar", "ideología", "idioma", "idiota", "idolatrar", "iglesia", "hielo", "iglú", "ignorante", "igualdad", "ilegal", "ilegalizar", "ilegítimo", "ilimitado", "iluminación", "ilusión", "ilustre", "imagen",
      "imaginación", "imbatible", "imbatibilidad", "imbécil", "immborrable", "imitador", "imitación", "impacto", "impedir", "impensable", "imperfecto", "implosionar", "inmenso", "impersonal", "inaccesible", "inactividad", "inadmisible", "inauguración", "incapaz", "incendio", "incendiar",
      "incesto", "incohente", "incompleto", "incomprensible", "inconsciente", "indecente", "indeseable", "independencia", "independiente", "indicar", "indigente", "indirecta", "indispensable", "individuo", "individual", "ineficaz", "inexplicable", "infalible", "infección", "infeliz",
      "infernal", "infierno", "inflamable", "informar", "infortunio", "infravalorado", "ingenio", "inocencia", "inocente", "inoxidable", "insaciable", "inscrito", "inscripción", "insensato", "insomnio", "inspirar", "institución", "instrumento", "insostenible", "insensible", "intacto",
      "integral", "integridad", "intelecto", "intelectual", "inteligencia", "intelectual", "intención", "intencionalidad", "intenso", "intentar", "intercambio", "interés", "interesante", "interior", "intermediar", "inundar", "inusual", "inundación", "ira", "irracional", "irreductible",
      "irrelevante", "irrespetuoso", "irritante", "isla", "Islam", "islámico", "izquierda", "ídolo", "íntimo", "jadear", "jamón", "jardín", "jarra", "jazz", "jerarquía", "jirafa", "joder", "jornada", "joven", "joya", "jubilación", "jubilado", "judío", "judaísmo", "juego", "jugar", "jurado", "juicio", "juramento", "jurásico", "júbilo",
      "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo", "primavera", "verano", "otoño", "invierno", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", "JulioCésar", "Napoleón", "Cleopatra", "Bush", "Clinton", "Obama", "Perón", "HugoChávez",
      "FidelCastro", "Bolívar", "HernánCortés", "SanMartín", "Alá", "Almagro", "Franco", "Beethoven", "Buda", "DaláiLama", "GengisKhan", "FridaKahlo", "Dalí", "Picasso", "VanGogh", "Hércules", "Jordan", "Zamorano", "Pelé", "DiStéfano", "Messi", "CristianoRonaldo", "Ronaldo", "Kun", "Alí", "TigerWoods", "Chicharito", "Acapulco",
      "África", "Alaska", "Alemania", "Alpes", "América", "Andalucía", "Antártida", "Argentina", "Asia", "Atenas", "Australia", "Barcelona", "Berlín", "Bolivia", "Boston", "California", "Colombia", "Chile", "Ecuador", "Egipto", "España", "Europa", "Filipinas", "Francia", "Arabia", "Bélgica", "Brasil", "Bruselas", "Guatemala", "Cuba",
      "Himalaya", "Holanda", "Honduras", "Irlanda", "Israel", "Italia", "Jamaica", "Japón", "FreddyMercury", "BobMarley", "BobDylan", "MichaelJackson", "JustinBieber", "MileyCyrus", "SnoopDog", "GrandMasterFlash", "MosDef", "LilWayne", "KanyeWest", "Beyonce", "NotoriusBig", "JulioIglesias", "DjPremiere",
      "SFDK", "MuchoMuchacho", "Aczino", "Chuty", "Invert", "Arkano", "Hadrian", "Piezas", "Eude", "Soen", "Blon", "JimmyHendrix", "JamesBrown", "Tupac", "Drake", "Pitbull", "RomeoSantos", "EnriqueIglesias", "AmyWinehouse", "karaoke", "kárate", "karma", "kebab", "kétchup", "kilo", "kilómetro", "laberinto",
      "labios", "laboratorio", "lactante", "ladrar", "ladrón", "lago", "lágrimas", "laicismo", "laico", "lameculos", "lamentable", "lamentar", "lamer", "lana", "langosta", "lanzacohetes", "lanzar", "lapidar", "lapidación", "lapsus", "lapicero", "lápiz", "largo", "larga", "largometraje", "larva", "lasagna", "lascivo", "lástima",
      "lata", "latente", "lateral", "latido", "latigazo", "latín", "latino", "laurel", "lavabo", "lavar", "lavandería", "leal", "lealtad", "lección", "leche", "lechuga", "lectivo", "lectura", "leer", "legal", "legalidad", "legible", "legislativo", "legislatura", "legitimidad", "legumbre", "lencería", "lengua", "lenguaje", "lengüetazo",
      "lente", "lentitud", "lenteja", "lente", "leña", "leñador", "león", "leopardo", "lepra", "leproso", "lesbiana", "lesión", "lesionado", "lesivo", "letal", "letargo", "letra", "leucemia", "levantamiento", "levantarse", "leve", "libertad", "libertador", "libre", "libro", "licencia", "licor", "líder", "liderazgo", "liebre",
      "libreta", "librería", "lienzo", "ligar", "ligero", "light", "lija", "limbo", "limón", "limonero", "limosna", "limpiar", "limpio", "limpieza", "limusina", "linaje", "linchar", "lindo", "linda", "lingote", "lino", "linterna", "lipotimia", "liposucción", "liquidar", "líquido", "lisiado", "lista", "listado", "listo",
      "literalmente", "litera", "literal", "literatura", "litigio", "litigar", "litro", "liturgia", "llamar", "llamada", "llamarada", "llamativo", "llamamiento", "llano", "llanto", "llave", "llavero", "llegar", "llegada", "lleno", "llevar", "llorar", "llorón", "llover", "lluvia", "lluvioso", "loable", "lobby",
      "lobotomía", "loco", "local", "localidad", "localizar", "locomotora", "logopeda", "locutorio", "logotipo", "logro", "lomo", "longevo", "look", "loro", "lote", "lotería", "lubricante", "lubricar", "lucha", "luchador", "luchar", "lucidez", "luciérnaga", "lucrativo", "ludópata", "ludopatía", "lugar",
      "lujo", "lujoso", "lujuria", "lujurioso", "luminoso", "luminosidad", "lupa", "luz", "lágrima", "lámina", "lámpara", "lápiz", "láser", "lápida", "lástima", "látex", "látigo", "léxico", "líquido", "lío", "línea", "lívido", "lógico", "lúcido", "macho", "macizo", "macroeconomía", "madera", "madre", "madrugar",
      "maduro", "madurar", "madurez", "maestro", "mafia", "mafioso", "magia", "magisterio", "magistrado", "magnate", "magnético", "magnesio", "magnicidio", "magnífico", "magnitud", "magulladura", "maíz", "majestad", "majestuoso", "mala", "mal", "malabares", "maldad", "maldecir", "maldito", "maleducado", "maléfico", "melancolía",
      "melancólica", "malentendido", "maletín", "malgastar", "malhumorado", "maligno", "malinterpretar", "mamá", "mamar", "mamífero", "mamut", "maná", "mancha", "mandar", "mandíbula", "manejar", "manga", "maniático", "manifestante", "manifestación", "maniobra", "manipular", "manipulador", "manía", "manjar", "mano",
      "manco", "manta", "mantequilla", "manual", "manzana", "mañana", "mapa", "maquinaria", "mar", "marcaje", "maratón", "marca", "marcha", "marciano", "marco", "marea", "maremoto", "marfil", "margarita", "marginado", "marginal", "marginar", "mariachi", "marihuana", "marinero", "mariposa", "mariscal", "marido", "marítimo",
      "marketing", "marqués", "marrón", "martillo", "martillazo", "martini", "masa", "masacre", "masacrar", "mascota", "masculino", "masón", "masoquista", "masticar", "mastodonte", "masturbar", "masturbación", "matar", "matadero", "matanza", "matemáticas", "material", "materializar", "matiz", "matrícula", "matrimonio",
      "matutino", "matemático", "mausoleo", "maya", "mayordomo", "mayoría", "mayúscula", "máximo", "maximizar", "mazo", "mágico", "máquina", "mármol", "mártir", "mear", "meada", "mecánico", "mecanismo", "mecanografía", "mecenas", "mecenazgo", "mecha", "mechero", "mechón", "medalla", "medallista", "medallero", "mediación",
      "mediador", "mediano", "medianía", "medianoche", "mediático", "medicación", "medicamento", "medicar", "medicina", "medicinal", "medición", "medida", "medieval", "medievo", "medio", "medioambiente", "medioambiental", "mediocampista", "mediocre", "mediocridad", "mediodía", "medir", "meditar", "meditabundo", "medusa",
      "mejillón", "mejora", "mejorable", "mejorar", "melancolía", "melancólico", "melena", "melocotón", "melodía", "melodrama", "membrana", "memoria", "memorial", "memorizar", "mención", "mencionar", "mendigar", "mendigo", "menguar", "menor", "menos", "menopausia", "menoscabar", "menospreciable", "menosprecio", "menospreciar",
      "mensaje", "mensajería", "mensajero", "menstruación", "menstruar", "mensual", "mensualidad", "menta", "mental", "mentalista", "mentir", "mentira", "mentiroso", "menú", "mercader", "mercado", "mercancía", "mercantilismo", "mercenario", "merecer", "merecedor", "merecimiento", "meretriz", "meridiano", "meritocracia",
      "mermelada", "merodear", "mes", "mesa", "mesías", "mesiánico", "mesonero", "mestizo", "mestizaje", "metabolismo", "metáfora", "metafórico", "metal", "metálico", "meter", "meteorito", "meteorólogo", "meteorología", "meticuloso", "metodología", "metralleta", "metropolitano", "metrosexual", "mexicano", "mezclar",
      "mezcla", "mezquino", "mezquita", "médico", "mérito", "método", "métrica", "microbio", "microchip", "microondas", "micro", "micrófono", "miedo", "miedoso", "miel", "miembro", "mientras", "mierda", "migración", "milagro", "milagroso", "milenio", "milésima", "milésima", "milicia", "miliciano", "militar", "militante",
      "milimétrico", "militarizar", "milla", "millón", "millonario", "mina", "minarete", "minero", "mineral", "miniatura", "minimalista", "minimizar", "ministerio", "ministro", "minoría", "minúsculo", "minusválido", "minusvalía", "minuto", "miope", "mirada", "miserable", "miseria", "misil", "mismo", "misterio", "místico",
      "mitad", "mito", "mitómano", "mitología", "mínimo", "mísero", "mobiliario", "modelo", "moda", "modalidad", "moderado", "moderador", "moderno", "modestia", "modesto", "modificar", "modificación", "modus operandi", "moho", "mohicano", "mojado", "mojar", "moldear", "molécula", "molestar", "molestia", "molino", "momento",
      "momia", "momificar", "monarca", "monarquía", "monasterio", "moneda", "monetizar", "monja", "monje", "monopolio", "monopolizar", "monosílabo", "monotema", "monumento", "monumental", "morado", "moral", "morbo", "morboso", "mordedura", "mordisco", "moreno", "morir", "mormón", "morse", "mortal", "mosaico", "mosca",
      "mostrar", "motín", "motivación", "motivar", "moto", "mover", "movilidad", "movimiento", "mozzarella", "módulo", "móvil", "muchacho", "muchedumbre", "mucho", "muerto", "mudo", "mueble", "mueca", "muerte", "muestra", "mujer", "mujeriego", "mulato", "mulata", "mullido", "multa", "multicolor", "multicultural", "multilateral",
      "multinacional", "multiplicación", "multiplicar", "multitud", "multiusos", "multitudinario", "mundano", "mundial", "mundo", "municipio", "muñeca", "mural", "murmullo", "murciélago", "murmullo", "musa", "musculatura", "musculoso", "museo", "musical", "musulmán", "mutante", "mutación", "mutuo", "múltiplo", "músculo",
      "música", "músico", "nacer", "nacimiento", "nación", "nacional", "nacionalismo", "nacionalsocialismo", "nacionalizar", "nadar", "naipe", "nalga", "nalgada", "nanotecnología", "naranja", "narcisista", "narcótico", "narcotraficante", "nariz", "narigón", "narrar", "narrativa", "narrador", "NASA", "nasal", "natación",
      "natalidad", "nativo", "natural", "naturaleza", "naturista", "naufragar", "naufragio", "náufrago", "nauseabundo", "navaja", "navajazo", "naval", "nave", "navegar", "navegable", "navegante", "navidad", "navideño", "navío", "nazi", "nazismo", "neandertal", "nebulosa", "necesidad", "necesario", "necesitar", "necesitado",
      "necrofilia", "necrópolis", "néctar", "nefasto", "negación", "negar", "negativa", "negligente", "negociable", "negociar", "negocio", "negociación", "negro", "mnemotecnia", "negrita", "nene", "neoyorquino", "nervios", "nervioso", "neumático", "neurona", "neurólogo", "neutral", "neutro", "neutrón", "nevar", "nevada",
      "nexo", "nicotina", "niebla", "nido", "nieve", "ninfa", "ninfómano", "ninfómana", "ningunear", "niña", "niñez", "nitidez", "nitro", "nivel", "nobel", "nobiliario", "nobleza", "noche", "noción", "nocivo", "nocturno", "noctámbulo", "nombrar", "nombre", "nomenclatura", "nominado", "noria", "norma", "normal", "normativa",
      "norte", "no", "nota", "notable", "notario", "noticia", "notificación", "notorio", "novato", "novela", "novedoso", "novedad", "novia", "noviazgo", "novio", "nómada", "nómina", "nórdico", "nube", "nublado", "nuclear", "nudista", "nudismo", "nuevo", "nulo", "numerar", "numeración", "nupcial", "nutrición", "nutrido", "núcleo",
      "número", "oasis", "obcecado", "obcecación", "obedecer", "obediente", "obelisco", "obeso", "obesidad", "obispo", "objeción", "objetar", "objetivo", "objetivamente", "oblicuo", "obligación", "obligatorio", "obra", "obsceno", "obscenidad", "obsequio", "obsequiar", "observar", "observación", "obsesión", "obseso", "obstáculo",
      "obstaculizar", "obstinación", "obstinado", "obstrucción", "obstruir", "obtener", "obviar", "ocasión", "ocaso", "occidente", "occidental", "occidentalización", "ocio", "ocioso", "ocultar", "ocultismo", "oculto", "ocurrencia", "odio", "odiar", "odioso", "odisea", "oeste", "ofender", "ofensa", "ofendido", "oferta",
      "oficial", "oficina", "oficio", "ofrecer", "ofrecimiento", "ofuscado", "ogro", "ojalá", "ojear", "ojo", "okupa", "ola", "oleaje", "oler", "olfatear", "olfato", "oligopolio", "olimpiada", "olímpico", "Olimpiada", "olimpo", "oliva", "olivar", "olivo", "olla", "olor", "oloroso", "olvidable", "olvidar", "olvido", "ombligo",
      "omisión", "omitir", "omnipotente", "omnipresente", "onda", "onomatopeya", "opaco", "opción", "operación", "opio", "opinar", "opinión", "oponente", "oportuno", "oportunidad", "oposición", "opositor", "opresivo", "optimismo", "optimista", "opuesto", "opulencia", "oración", "oráculo", "orar", "orco", "orden", "oreo",
      "ordenador", "ordeñar", "oreja", "orfandad", "orfanato", "orfebre", "organigrama", "orgánico", "organizar", "organización", "orgasmo", "orgía", "orgullo", "orgulloso", "orientación", "orientar", "oriente", "orificio", "origen", "original", "originar", "orilla", "orinar", "orina", "ornamentación", "oro", "orquesta",
      "ortodoxo", "ortografía", "osadía", "osado", "oscuro", "oso", "ostentar", "ostentoso", "otorgar", "otro", "ovación", "ovario", "oveja", "oyente", "ozono", "ópera", "óptica", "óptimo", "órgano", "óvalo", "pabellón", "paciente", "paciencia", "pacto", "pacifista", "padecer", "padecimiento", "paella", "paga", "pagano",
      "página", "país", "paisaje", "paisano", "paja", "pájaro", "palabra", "palacio", "palanca", "paleolítico", "paleontólogo", "pálido", "palillo", "paliza", "palmada", "palmarés", "palmera", "palpar", "pampa", "pan", "panamericano", "pancarta", "pandemia", "panorama", "pantalla", "pantano", "panza", "pañal", "papá",
      "papel", "papelera", "papeleo", "papiro", "paquete", "parábola", "paracaidistas", "paracaidismo", "paracetamol", "paradigma", "paradisiaco", "paradoja", "parafernalia", "parafrasear", "paraguas", "paraíso", "paralelo", "paralímpico", "parálisis", "paralizar", "paralizado", "paramilitar", "paranoia", "parapléjico",
      "parar", "par", "paranormal", "parásito", "parcela", "parcial", "parcialidad", "pareado", "pareja", "parafernalia", "parásito", "parámetro", "parecido", "pareja", "parentesco", "paréntesis", "paridad", "parir", "paritorio", "paro", "parodia", "parón", "pasada", "pasaje", "paseo", "pasión", "pasivo", "paso", "pasta",
      "pastel", "pastelería", "pastilla", "patear", "pata", "patata", "patentar", "paternal", "patriarca", "patrimonio", "patriota", "patrocinador", "patrón", "patrulla", "paupérrimo", "pausa", "paz", "pálido", "pánico", "párrafo", "práctica", "preacuerdo", "preámbulo", "precaución", "precario", "precedente", "precio",
      "precioso", "precisamente", "precipicio", "precipitación", "preciso", "predeterminar", "predicar", "predicado", "predicción", "predisposición", "preferente", "preferencia", "prefijo", "pregunta", "preguntar", "prehistoria", "prejuicio", "preliminar", "premio", "premisa", "prenda", "prender", "prensa", "prensar",
      "preocupado", "preocupación", "preparar", "preparativo", "preposición", "prepotente", "prepucio", "presa", "prescindir", "prescribir", "presencia", "presente", "presentación", "preservar", "presidiario", "presidente", "presión", "préstamo", "preso", "prestigio", "presumir", "presumido", "presuntuoso", "presuponer",
      "presupuesto", "pretemporada", "pretensión", "pretérito", "pretexto", "pretoriano", "preavalecer", "prevaricar", "prevenir", "prevención", "preventivo", "previo", "previsible", "previsor", "página", "pájaro", "peaje", "peatonal", "pecado", "pecador", "pecar", "pecera", "pecho", "pechuga", "pectoral", "peculiar",
      "peculiaridad", "pedagógico", "pedagogo", "pedalear", "pedante", "pederasta", "pederastia", "pedestal", "pediatra", "pedida", "pedido", "pedir", "pedigüeño", "pedo", "pedofilia", "pedófilo", "pedrería", "pegar", "pegamento", "pegajoso", "peinar", "peinado", "peine", "pelar", "pelaje", "pelea", "pelear", "pelícano",
      "película", "peligro", "peligroso", "pellejo", "pellizco", "pellizcar", "pelo", "pelotazo", "pelota", "pelotudo", "peluche", "peluquería", "peluquero", "pelusa", "pelvis", "pena", "pene", "penal", "penalidad", "penalización", "penalti", "pendejo", "pendejada", "pendiente", "penetrar", "penetración", "penicilina",
      "península", "penique", "penitenciaría", "penitencia", "penitente", "penoso", "penosidad", "pensamiento", "pensar", "pensativo", "pensión", "pensionistas", "pentágono", "pentagrama", "penúltimo", "penuria", "peña", "peón", "peor", "pepino", "pepita", "pequeño", "pequeñez", "percance", "percibir", "percepción",
      "perceptible", "percusionista", "percutir", "perdedor", "perdición", "perdidamente", "perdigón", "perdigonazo", "perdón", "perdonable", "perdonar", "perdonavidas", "perdurar", "perdurable", "perecer", "peregrino", "peregrinaje", "peregrinación", "peregrinar", "perenne", "pereza", "perezoso", "perfección",
      "perfeccionar", "perfecto", "perfil", "perfilar", "perforar", "perforación", "performance", "perfume", "perfumar", "pergamino", "pericia", "perico", "periferia", "perilla", "perímetro", "periódico", "periodicidad", "periodista", "periodismo", "periplo", "periscopio", "perjudicado", "perjuicio", "perjudicial",
      "perjudicar", "perjurio", "perla", "permanecer", "permanente", "permeabilidad", "permisible", "permitir", "permiso", "permisibilidad", "permutación", "pernoctar", "peroné", "peronismo", "perpendicular", "perpetrar", "perpétuo", "perro", "perra", "perrera", "persecución", "perseguido", "perseverar", "perseverancia",
      "perseverante", "persistente", "persistir", "persona", "personaje", "personalidad", "personalismo", "personificar", "perspicacia", "persuadir", "persuasivo", "pertenencia", "pertenecer", "pertinencia", "perturbar", "perturbado", "perverso", "perversión", "pervertir", "pervivir", "peso", "pesa", "pesado", "pesar",
      "pesaje", "pesca", "pescado", "pescadería", "pescuezo", "pesimismo", "pesimista", "pestaña", "pestañear", "peste", "pestilente", "petaca", "petrificar", "petrodólares", "petróleo", "peyorativo", "pez", "pezuña", "piar", "piano", "pianista", "picar", "picante", "picaresca", "pie", "piedad", "piel", "pienso", "pifia",
      "pigmentación", "pila", "pillar", "pimiento", "pimentón", "pino", "pinacoteca", "pincel", "pincelada", "pinchar", "pinchazo", "pingüino", "pintar", "pintor", "pintada", "pintura", "pinza", "piña", "pirámide", "pirata", "piraña", "piragüismo", "piratería", "piragüista", "pirómano", "pirotecnia", "pisada", "piso", "pista",
      "pistola", "pitos", "pitido", "pizarra", "pizza", "pizzería", "péndulo", "pértiga", "pésimo", "pívot", "población", "poblado", "pobre", "poder", "poderío", "poderoso", "poderes", "podrido", "poema", "poeta", "poesia", "polar", "polo", "polea", "polémica", "polemizar", "policía", "policiaco", "policial", "polígamo",
      "polígono", "política", "político", "polivalente", "polla", "pollo", "polluelo", "polución", "pomposo", "ponderar", "poner", "popa", "popular", "populista", "populismo", "porción", "pormenores", "porno", "pornografía", "pornográfico", "porquería", "porro", "portaaviones", "portada", "portavoz", "portento",
      "portentoso", "portero", "portuario", "porvenir", "posada", "poseer", "poseedor", "poseído", "posesión", "posesivo", "posguerra", "posibilidad", "posibilitar", "posible", "posición", "positivo", "posponer", "postal", "posterior", "postre", "potable", "potencia", "potenciar", "potente", "potro", "pozo",
      "pócima", "poker", "pólvora", "póstumo", "practicar", "prado", "pradera", "pragmático", "préstamo", "predicar", "proa", "proactividad", "probable", "probabilidad", "problema", "problemática", "procedencia", "proceso", "procesar", "proclamación", "proclamar", "prodigio", "producción", "productividad",
      "producir", "producto", "productor", "profanar", "profeta", "profecía", "profesión", "profesinal", "profesor", "profundo", "progenitor", "programa", "programar", "progresar", "progreso", "progresista", "prohibir", "prohibido", "prohibición", "prohibitivo", "proletariado", "proliferar", "prolongación",
      "prolongar", "promedio", "prometer", "promesa", "promiscuo", "promiscuidad", "promotor", "promover", "pronóstico", "pronosticar", "pronto", "pronunciar", "pronunciación", "propagar", "proposición", "propuesta", "propaganda", "propenso", "propio", "propiedad", "propietario", "proporción", "proporcional",
      "proporcionar", "proporcionalidad", "propulsar", "prórroga", "proscrito", "prosa", "prospecto", "prosperidad", "prostíbulo", "prostituta", "prostitución", "prosperar", "próstata", "protagonista", "protagonizar", "protagonismo", "protección", "proteger", "protectorado", "protegido", "proteína", "protesta",
      "protocolo", "protuberancia", "proveer", "proveedor", "proverbio", "provincia", "providencia", "provocar", "provocador", "provocación", "proyección", "proyectil", "proyecto", "prójimo", "prólogo", "prórroga", "prótesis", "próximo", "próximamente", "prima", "prieto", "primicia", "primero", "primaria", "primitivo",
      "primogénito", "primordial", "princesa", "principado", "príncipe", "principio", "prioridad", "prisión", "privado", "privacidad", "privativo", "privatizar", "privatización", "privilegio", "privilegiado", "primaveral", "prudencia", "prudente", "Capricornio", "Leo", "Cáncer", "Aries", "Libra", "Piscis", "Tauro",
      "Escorpio", "Géminis", "Virgo", "Sagitario", "Acuario", "Mercurio", "Venus", "La Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón", "Sol", "Luna", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "primero", "segundo", "tercero", "cuarto", "quinto",
      "sexto", "séptimo", "octavo", "noveno", "décimo", "Hércules", "Leviatán", "Aristóteles", "Platón", "Alejandro Magno", "Jesucristo", "Mahoma", "Donald Trump", "Lucifer", "Cervantes", "Shakespeare", "Don Quijote", "Sancho Panza", "Lenin", "Stalin", "Hitler", "Maquiavelo", "Pitágoras", "Einstein",
      "Lebron James", "Michael Jordan", "Pau Gasol", "Kobe Bryant", "Iniesta", "Neymar", "Lance Armstrong", "Rafa Nadal", "Piqué", "Sergio Ramos", "Kenia", "Letonia", "Líbano", "Andes", "Canadá", "Estados Unidos", "México", "República Dominicana", "Puerto Rico", "Venezuela", "Panamá", "Costa Rica", "Nicaragua",
      "El Salvador", "Honduras", "Jamaica", "Perú", "Paraguay", "Uruguay", "Polinesia", "Portugal", "Inglaterra", "Polonia", "Suecia", "Rusia", "China", "Turquía", "Nigeria", "Congo", "Sudáfrica", "India", "Irak", "Irán", "Siria", "Afganistán", "Pakistán", "Tailandia", "Vietnam", "Japón", "Corea", "Marruecos",
      "Babilonia", "Pompeya", "Lisboa", "Madrid", "París", "Londres", "Dublín", "Amsterdam", "Roma", "Milán", "Viena", "Praga", "Atenas", "Estambul", "Moscú", "Chicago", "Washington", "New York", "Los Angeles", "Dallas", "San Francisco", "Tijuana", "La Habana", "Cancún", "Bogotá", "Medellín", "Caracas",
      "Lima", "Río de Janeiro", "Buenos Aires", "Santiago de Chile", "Montevideo", "Ciudad del Cabo", "Nairobi", "El Cairo", "Alejandría", "Dakar", "La Meca", "Bagdad", "Kabul", "Bombay", "Bangkok", "Shanghai", "Tokyo", "Seúl", "Hong Kong", "Sidney", "Melbourne", "Toronto", "Potosí", "Babilonia", "Pompeya",
      "Mediterráneo", "Groenlandia", "Pirineos", "Andes", "Caribe", "Atlántico", "Índico", "Pacífico", "Sahara", "Amazonas", "Nilo", "Mississippi", "Oceanía", "Mbaka", "Kódigo", "Tata", "Dtoke", "Stigma", "Shakira", "Eminem", "Tupac", "Biggie", "Punchline", "Barras", "Flow", "Skills", "Papo", "Chuty", "Dtoke", "Skone",
      "Aczino", "Jurado", "Misionero", "BeatBox", "Trueno", "Réplica", "Estructuras", "Métricas", "Wos", "Patron"
    ]