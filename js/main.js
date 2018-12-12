$(document).ready(function(){

    $("#date").text(getDate());
    
    // $.ajax({
    //     type: "Get",
    //     url: "assets/articles.json",
    //     dataType: "json",
    //     success: function(data) {
    //         console.log(data);
    //         // data.Stories.forEach(function (article) {
    //             buildArticle(JSON.parse(data));
    //         // });
    //     },
    //     error: function(){
    //         alert("json not found");
    //     }
    // });

    $.getJSON( "assets/articles.json", function(data) {
        console.log( "success" );
        console.log(data);
        buildArticle(data)
    });

    function buildArticle(articles) {
        // Grab the template script
        var theTemplateScript = $("#article-template").html();

        // Compile the template
        var theTemplate = Handlebars.compile(theTemplateScript);

        // Define our data object
        var context={
            stories: []
        };
        
        articles.Stories.forEach(function (story) {
           context.stories.push(story); 
        });
        
        console.log(context);

        // Pass our data to the template
        var theCompiledHtml = theTemplate(articles);

        // Add the compiled html to the page
        $('.content-placeholder').html(theCompiledHtml);
    };

});

function getDate() {
    return moment().format('dddd, D MMMM YYYY');
}