$(function () {

    $('#success').hide();
    var score = 0;
    $('#startover').addClass('hoverOut');

    $('#bobhead').click(function () {
        score++;
        $('#score').text(score);
        $('#success').show('slow').fadeOut(2000);
    });  

    $('#startover').hover(function(){
        score = 0;
        $('#score').text(score);
        $('#startover').addClass('hoverIn').removeClass('hoverOut');
    },function(){
        $('#startover').removeClass('hoverIn').addClass('hoverOut');
    });
});