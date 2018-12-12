$(document).ready(function () {

    $("#date").text(getDate());

    

});

function getDate() {
    return moment().format('dddd, D MMMM YYYY');
}