//$(function () {
    //function buildACat() {
    //    var catName = "Mr Tibbles";
    //    function catFactory() {
    //        // function scoping: In javascript the scope of a variable
    //        // is defined its location within the source code, and nested functions 
    //        // have access to variables defined in their outer scope

    //        alert(catName);
    //    };
    //    catFactory();  // Execute this immediately (TODO: Can we achieve these with () after the definition?)
    //}

    //$('#buildCat').click(function () {
    //    buildACat();
    //});
//});

$(function () {
    function buildACat() {
        var catName = "Tuffy";
        function catFactory() {
            alert(catName);
        };

        return catFactory; 
    }

    $('#buildCat').click(function () {
        var myNewCat = buildACat();
        
        myNewCat();
    });
});