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
                        "firstName": "10 of hearts",
                        "second": "assets/cards/JH.png",
                        "secondName": "jack of hearts",
                        "third": "assets/cards/QH.png",
                        "thirdName": "queen of hearts",
                        "fourth": "assets/cards/KH.png",
                        "fourthName": "king of hearts",
                        "fifth": "assets/cards/AH.png",
                        "fifthName": "ace of hearts"
                    },
                    {
                        "title": "Straight Flush",
                        "first": "assets/cards/6H.png",
                        "firstName": "6 of hearts",
                        "second": "assets/cards/7H.png",
                        "secondName": "7 of hearts",
                        "third": "assets/cards/8H.png",
                        "thirdName": "8 of hearts",
                        "fourth": "assets/cards/9H.png",
                        "fourthName": "9 of hearts",
                        "fifth": "assets/cards/10H.png",
                        "fifthName": "10 of hearts"
                    },
                    {
                        "title": "Four of a kind",
                        "first": "assets/cards/AH.png",
                        "firstName": "ace of hearts",
                        "second": "assets/cards/AD.png",
                        "secondName": "ace of diamonds",
                        "third": "assets/cards/AS.png",
                        "thirdName": "ace of spades",
                        "fourth": "assets/cards/AC.png",
                        "fourthName": "ace of clubs",
                        "fifth": "assets/cards/KH.png",
                        "fifthName": "king of hearts"
                    },
                    {
                        "title": "Full House",
                        "first": "assets/cards/AH.png",
                        "firstName": "ace of hearts",
                        "second": "assets/cards/AD.png",
                        "secondName": "ace of diamonds",
                        "third": "assets/cards/AS.png",
                        "thirdName": "ace of spades",
                        "fourth": "assets/cards/10C.png",
                        "fourthName": "10 of clubs",
                        "fifth": "assets/cards/10H.png",
                        "fifthName": "10 of hearts"
                    },
                    {
                        "title": "Flush",
                        "first": "assets/cards/10H.png",
                        "firstName": "10 of hearts",
                        "second": "assets/cards/6H.png",
                        "secondName": "6 of hearts",
                        "third": "assets/cards/3H.png",
                        "thirdName": "3 of hearts",
                        "fourth": "assets/cards/7H.png",
                        "fourthName": "7 of hearts",
                        "fifth": "assets/cards/KH.png",
                        "fifthName": "king of hearts"
                    },
                    {
                        "title": "Straight",
                        "first": "assets/cards/6S.png",
                        "firstName": "6 of spades",
                        "second": "assets/cards/7H.png",
                        "secondName": "7 of hearts",
                        "third": "assets/cards/8C.png",
                        "thirdName": "8 of clubs",
                        "fourth": "assets/cards/9H.png",
                        "fourthName": "9 of hearts",
                        "fifth": "assets/cards/10D.png",
                        "fifthName": "10 of diamonds"
                    },
                    {
                        "title": "Three of a kind",
                        "first": "assets/cards/QS.png",
                        "firstName": "queen of spades",
                        "second": "assets/cards/QH.png",
                        "secondName": "queen of hearts",
                        "third": "assets/cards/QC.png",
                        "thirdName": "queen of clubs",
                        "fourth": "assets/cards/6H.png",
                        "fourthName": "6 of hearts",
                        "fifth": "assets/cards/2D.png",
                        "fifthName": "2 of diamonds"
                    },
                    {
                        "title": "Two Pair",
                        "first": "assets/cards/KS.png",
                        "firstName": "king of spades",
                        "second": "assets/cards/KH.png",
                        "secondName": "king of hearts",
                        "third": "assets/cards/9S.png",
                        "thirdName": "9 of spades",
                        "fourth": "assets/cards/9D.png",
                        "fourthName": "9 of diamonds",
                        "fifth": "assets/cards/2H.png",
                        "fifthName": "2 of hearts"
                    },
                    {
                        "title": "Pair",
                        "first": "assets/cards/AS.png",
                        "second": "assets/cards/AH.png",
                        "secondName": "ace of hearts",
                        "firstName": "10 of hearts",
                        "third": "assets/cards/2C.png",
                        "thirdName": "2 of clubs",
                        "fourth": "assets/cards/9C.png",
                        "fourthName": "9 of clubs",
                        "fifth": "assets/cards/4S.png",
                        "fifthName": "4 of spades"
                    },
                    {
                        "title": "High Card",
                        "first": "assets/cards/AS.png",
                        "firstName": "10 of hearts",
                        "second": "assets/cards/4C.png",
                        "secondName": "4 of clubs",
                        "third": "assets/cards/6C.png",
                        "thirdName": "6 of clubs",
                        "fourth": "assets/cards/7H.png",
                        "fourthName": "7 of hearts",
                        "fifth": "assets/cards/JD.png",
                        "fifthName": "jack of diamonds"
                    }
                ]
            };
        var theCompiledHtml = theTemplate(context);
        $('.hands-placeholder').html(theCompiledHtml);
    })

});