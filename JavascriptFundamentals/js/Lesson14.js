$(document).ready(function(){
    // start code goes here
    var clickMeButton = $('#clickMe');
    clickMeButton = fadeOut;
    document.getElementById('clickMe').onclick = fadeOut;

    var mytitle = $("#title");
    mytitle.text("Yay, now I can access the title directly");

    $("#first").html("<h2>Great Quotes</h2");

    $("#myAnchor").attr("href", "http://google.com");

    $("#title").addClass("standout");
});

function fadeOut() {
    $('p').fadeOut();
    //for (p in paragraphs) {
    //    paragraphs[p].fadeOut();
    //}

    
}