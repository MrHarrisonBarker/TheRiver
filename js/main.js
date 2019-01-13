$(document).ready(function () {

    $("#date").text(getDate());

    $("html").attr('class', 'theme-light');

    $("#ThemeChange").click(function () {
        if ($("html").hasClass('theme-light')){
            $("html").attr('class', 'theme-dark').css("background-color", "rgb(33, 33, 33)");
            $("#DarkIcon").css("display","none");
            $("#LightIcon").css("display","unset");
        } else {
            $("html").attr('class', 'theme-light').css("background-color", "rgb(255, 255, 255)");
            $("#LightIcon").css("display","none");
            $("#DarkIcon").css("display","unset");
        }
    });
    

});

function getDate() {
    return moment().format('dddd, D MMMM YYYY');
}