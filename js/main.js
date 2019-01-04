$(document).ready(function () {

    $("#date").text(getDate());



    $("#ThemeChange").click(function () {
        if ($("main").hasClass('theme-light')){
            $("main").attr('class', 'theme-dark');
            $("#DarkIcon").css("display","none");
            $("#LightIcon").css("display","unset");
        } else {
            $("main").attr('class', 'theme-light');
            $("#LightIcon").css("display","none");
            $("#DarkIcon").css("display","unset");
        }
    });
    

});

function getDate() {
    return moment().format('dddd, D MMMM YYYY');
}