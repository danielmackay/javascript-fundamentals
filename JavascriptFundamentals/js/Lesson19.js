$(function () {
    $('#clickMe').click(function () {

        //$.getJSON('foo.txt', function (data) {
        //    var items = [];

        //    $.each(data, function (key, val) {
        //        items.push('<li id="' + key + '">' + val + '</li>');
        //    });

        //    $('<ul/>', {
        //        'class': 'interest-list',
        //        html: items.join('')
        //    }).appendTo('body');
        //});

        $.ajax({
            url: "foo.txt",
            dataType: "json",
            success: function (data) {
                var items = [];

                $.each(data, function (key, val) {
                    items.push('<li id="' + key + '">' + val + '</li>');
                });

                $('<ul/>', {
                    'class': 'interest-list',
                    html: items.join('')
                }).appendTo('body');
            },
            statusCode: {
                404: function () {
                    alert('A problem has occured, please try again soon.');
                }
            }

        });
    });
});