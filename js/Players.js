$(document).ready(function () {
       // if (e.hasClass("collapsed")) {
           
       // }
    // });

    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
    
    var players;
    
    $.getJSON("assets/players.json", function (data) {
        console.log("success");
        console.log(data);
        players = data;
        buildPlayer(data)
    });

    function buildPlayer(players) {
        // Grab the template script
        var theTemplateScript = $("#player-template").html();

        // Compile the template
        var theTemplate = Handlebars.compile(theTemplateScript);

        console.log(players);

        // Pass our data to the template
        var theCompiledHtml = theTemplate(players);

        // Add the compiled html to the page
        // $('.content-placeholder').html(theCompiledHtml);
        $('.content-placeholder').html(theCompiledHtml);
    }

    $("#SortButton").click(function () {
        var ctx = document.getElementById('myChart').getContext('2d');
        var data = {
            labels: [],
            datasets:[
                {
                    label: ['Biggest wins of players'],
                    data: [],
                    backgroundColor: []
                },
                {
                    label: ['Total winnings of players'],
                    data: [],
                    backgroundColor: []
                }
            ]
        };
        players.player.forEach(function (e) {
            console.log(e.BiggestWinNumber);
            data.datasets[0].data.push(e.BiggestWinNumber);
            data.datasets[1].data.push(e.TotalWinningNumber);
            data.labels.push(e.Id);
            data.datasets[0].backgroundColor.push(`rgba(${Math.floor((Math.random() * 100) + 1)},${Math.floor((Math.random() * 100) + 1)},${Math.floor((Math.random() * 100) + 1)},0.5)`);
            data.datasets[1].backgroundColor.push(`rgba(${Math.floor((Math.random() * 100) + 1)},${Math.floor((Math.random() * 100) + 1)},${Math.floor((Math.random() * 100) + 1)},0.5)`);
        });
        console.log(data);
        var options = {
            
        };
        
        
        var myBubbleChart = new Chart(ctx,{
            type: 'bar',
            data: data,
            options: options
        });
    });
});