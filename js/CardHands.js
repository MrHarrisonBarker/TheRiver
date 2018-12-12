$(document).ready(function () {

    $(function () {
        var theTemplateScript = $("#hands-template").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        var context =
            {
                hands: [
                    {
                        "title": "Royal Flush",
                        "first": "assets/cards/10H.png",
                        "second": "assets/cards/JH.png",
                        "third": "assets/cards/QH.png",
                        "fourth": "assets/cards/KH.png",
                        "fifth": "assets/cards/AH.png"
                    },
                    {
                        "title": "Straight Flush",
                        "first": "assets/cards/6H.png",
                        "second": "assets/cards/7H.png",
                        "third": "assets/cards/8H.png",
                        "fourth": "assets/cards/9H.png",
                        "fifth": "assets/cards/10H.png"
                    },
                    {
                        "title": "Four of a kind",
                        "first": "assets/cards/AH.png",
                        "second": "assets/cards/AD.png",
                        "third": "assets/cards/AS.png",
                        "fourth": "assets/cards/AC.png",
                        "fifth": "assets/cards/KH.png"
                    },
                    {
                        "title": "Full House",
                        "first": "assets/cards/AH.png",
                        "second": "assets/cards/AD.png",
                        "third": "assets/cards/AS.png",
                        "fourth": "assets/cards/10C.png",
                        "fifth": "assets/cards/10H.png"
                    },
                    {
                        "title": "Flush",
                        "first": "assets/cards/10H.png",
                        "second": "assets/cards/6H.png",
                        "third": "assets/cards/3H.png",
                        "fourth": "assets/cards/7H.png",
                        "fifth": "assets/cards/KH.png"
                    },
                    {
                        "title": "Straight",
                        "first": "assets/cards/6S.png",
                        "second": "assets/cards/7H.png",
                        "third": "assets/cards/8C.png",
                        "fourth": "assets/cards/9H.png",
                        "fifth": "assets/cards/10D.png"
                    },
                    {
                        "title": "Three of a kind",
                        "first": "assets/cards/QS.png",
                        "second": "assets/cards/QH.png",
                        "third": "assets/cards/QC.png",
                        "fourth": "assets/cards/6H.png",
                        "fifth": "assets/cards/2D.png"
                    },
                    {
                        "title": "Two Pair",
                        "first": "assets/cards/KS.png",
                        "second": "assets/cards/KH.png",
                        "third": "assets/cards/9S.png",
                        "fourth": "assets/cards/9D.png",
                        "fifth": "assets/cards/2H.png"
                    },
                    {
                        "title": "Pair",
                        "first": "assets/cards/AS.png",
                        "second": "assets/cards/AH.png",
                        "third": "assets/cards/2C.png",
                        "fourth": "assets/cards/9C.png",
                        "fifth": "assets/cards/4S.png"
                    },
                    {
                        "title": "High Card",
                        "first": "assets/cards/AS.png",
                        "second": "assets/cards/4C.png",
                        "third": "assets/cards/6C.png",
                        "fourth": "assets/cards/7H.png",
                        "fifth": "assets/cards/JD.png"
                    }
                ]
            };
        var theCompiledHtml = theTemplate(context);
        $('.hands-placeholder').html(theCompiledHtml);
    })

});