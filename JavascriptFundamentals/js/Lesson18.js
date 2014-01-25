$(function () {
    //alert(AETRIS.planet.name);

    $('#clickMe').click(function () {
        $('#main').append("You should only see this if you click the plus");
    });

    $('#main').append('<img src="../img/plus-8.png" alt="click me to see the paragraph" id="clickMe" />');

    $('#clickMe').toggle(function () {
        $('#message').show('fast');
        $('#clickMe').attr('src', '../img/minus-8.png');
    }, function () {
        $('#message').hide('slow');
        $('#clickMe').attr('src', '../img/plus-8.png');
    });

});

//var AETRIS = {};

//AETRIS.version = 1.2;

//AETRIS.planet = {
//    id: 34,
//    name: "Saturn"
//};