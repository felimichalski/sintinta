$('.triangulo').on('mouseover', () => {
    $('#infoder').css('transition', 'all .5s ease');
    $('#infoder').css('visibility', 'visible');
    $('#infoder').css('color', 'black');
})

$('.triangulo').on('mouseleave', () => {
    $('#infoder').css('color', 'transparent');
    $('#infoder').css('visibility', 'hidden');
})