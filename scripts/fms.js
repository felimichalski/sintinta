$('.triangulo').on('mouseover', data => {
    $('#infoder').css('transition', 'all .5s ease');
    $('#infoder').css('visibility', 'visible');
    $('#infoder').css('color', 'black');
    let id = data.target.id;
    switch (id) {
        case 'easy':
            $('#infoder').html('<h5><center>EASY MODE</center></h5>Aparecerá en pantalla una palabra totalmente aleatoria, que irá rotando cada 10 segundos.<br/>Intentá utilizarla para rimar, aprovecharla para elaborar un punchline ingenioso o simplemente como inspiración para tu freestyle.');
            break;
        case 'hard':
            $('#infoder').html('<h5><center>HARD MODE</center></h5>Aparecerá en pantalla una palabra totalmente aleatoria, que irá rotando cada 5 segundos.<br/>Intentá utilizarla para rimar, aprovecharla para elaborar un punchline ingenioso o simplemente como inspiración para tu freestyle.');
            break;
        case 'extreme':
            $('#infoder').html('<h5><center>EXTREME MODE</center></h5>Aparecerá en pantalla una palabra totalmente aleatoria, que irá rotando cada 2 segundos.<br/>Intentá utilizarla para rimar, aprovecharla para elaborar un punchline ingenioso o simplemente como inspiración para tu freestyle. Perfeccioná tu rapidez mental con las palabras pasando tan velozmente.');
            break;
        case 'tematicas':
            $('#infoder').html('<h5><center>TEMÁTICAS</center></h5>Aparecerá en pantalla una temática que podrás utilizar de la manera que quieras, haciendo referencias, doble sentidos o mencionándola en tus rimas.');
            break;
        case 'personajes':
            $('#infoder').html('<h5><center>PERSONAJES CONTRAPUESTOS</center></h5>Aparecerán en pantalla dos personas, personajes, objetos entre otras opciones. Podrás apropiarte de uno y defenderlo o utilizarlos como una temática. Este formato es ideal para una modalidad 4x4 con amigos.');
            break;
        case 'imagenes':
            $('#infoder').html('<h5><center>IMÁGENES</center></h5>Aparecerán en pantalla primero una, y luego dos imágenes aleatorias. Utiliza tu creatividad para encontrar conexiones entre ambas y utilízalas como inspiración para tu freestyle.');
            break;
        case 'noticias':
            $('#infoder').html('<h5><center>NOTICIAS</center></h5>Aparecerá en pantalla un artículo periodístico sobre algún tema de actualidad. Encuentra distintas maneras de abordarlo e inspirate en el para realizar tu freestyle.');
            break;
        case 'terminaciones':
            $('#infoder').html('<h5><center>TERMINACIONES</center></h5>Aparecerá en pantalla una terminación de palabra, que rotará cada 10 segundos. Deberás estar atento y buscar rápido una palabra que finalice como se indica en la pantalla.');
            break;
    }
})

$('.triangulo').on('mouseleave', () => {
    $('#infoder').css('color', 'transparent');
    $('#infoder').css('visibility', 'hidden');
})