
var answers = ["Yes, abosulately.",
                "No, not that I konw it.",
                "Maybe, it's possible.",
                "Ask me later.",
                "As I see it, yes.",
                "Not today.",
                "Cant predict now.",
                "Dont count on it.",
                "My sources say yes.",
               "Dont even think about it.",
               "Very doubtful",
                "You can rely on it.",
                "I hope so.",
                "Better not tell you now.",
                "Most likely.",
               ];
    result = function(){
        var randomnumber = Math.floor(Math.random()*15);

   document.getElementById('res').innerHTML ="Answer"+answers[randomnumber];

    }

    $(#bigball).click(){
      $('.shake').effect("shake",{
        times:8,
        direction:"up"
      },3000);
var mytimer = window.setTimeout('result()',3000);
});



