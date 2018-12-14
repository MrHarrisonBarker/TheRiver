$(document).ready(function () {
    
    $('#BlindFormSubmit').click( function () {
        CalculateStructure();
    });

    function CalculateStructure() {
        var StartingChips = document.querySelector("#StartingChipsInput").value;
        var LengthOfTourny = document.querySelector("#LengthOfTournyInput").value;
        var BlindPeriod = document.querySelector("#BlindPeriodInput").value;

        console.log(StartingChips);

        var StartingBlind = StartingChips / 50;
        var Blinds = {
            Blind: []
        };
        for (var i = 1; i < LengthOfTourny / BlindPeriod + 1; i++) {
            Blinds.Blind.push({
                "i": i,
                "Small": (StartingBlind * i) / 2,
                "Big": StartingBlind * i
            })
        }
        console.log(Blinds);
        // document.getElementById('blinds').innerHTML = Blinds.toString();
        GenerateTable(Blinds);
    }
    
    function GenerateTable(Blinds) {
        var theTemplateScript = $("#Blinds-Template").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        var theCompiledHtml = theTemplate(Blinds);
        $('.Blinds-Table-Placeholder').html(theCompiledHtml);
    }

});