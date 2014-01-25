$(function () {
    $('#tabs').tabs().tabs("add", "Lesson16.html", "Click-a-bob");
    $('#datepicker').datepicker({
        onSelect: function (dateText, inst) {
            $('#title').text('you selected ' + dateText);
        }
    });
});