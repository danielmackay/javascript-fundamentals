$(function(){
    //alert('hi');

    // By id
    //$('#first').addClass('highlight');

    // By element
    //$('p').addClass('highlight');

    // By class
    //$(".chosen").addClass("highlight");

    // Combination
    //$("#first, .chosen").addClass("highlight");

    // Contains
    //$('li:contains("Three")').addClass('highlight');

    // Next
    //$('li:contains("Three")').next().addClass('highlight');

    // Previous
    //$('li:contains("Three")').prev().addClass('highlight');

    // Siblings
    //$('li:contains("Three")').siblings().addClass('highlight');

    // Parent
    //$('li:contains("Three")').parent().addClass('highlight');

    // 1st child
    //$('li:nth-child(1)').addClass('highlight');

    // index element type by attribute
    //$('p[name="mySecondPara"]').addClass('highlight');
    //$('p[name!="mySecondPara"]').addClass('highlight');
    //$('p').not('[name]').addClass('highlight');

    //$('p:empty').text('found an empty paragraph!');
    
    $('li:even').addClass('highlight');
    $('li:odd').addClass('highlightOdd');
})();