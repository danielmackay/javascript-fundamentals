window.onload = function () {
    var clickMe = document.getElementById('clickMe').onclick = RunExample;
}

//function RunExample() {
//    alert('Running the example');
//}

function RunExample() {
    var myElement = document.getElementById('second');
    var myNodeName = myElement.nodeName;

    //alert(myNodeName);

    //if (myElement != null) {
    //    alert(myElement.innerHTML);
    //}

    //myElement.innerHTML = "See how I set the text here?";

    var paragraphs = document.getElementsByTagName('p');
    //alert(paragraphs.length);

    var secondParagraph = paragraphs[1];
    //alert(secondParagraph.innerHTML);

    //alert(myElement.parentElement.nodeName);

    var anchor = document.getElementById('myAnchor');
    var anchorDest = anchor.href;
    alert(anchorDest);
}