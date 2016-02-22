var submit = document.getElementById("submit");
submit.onclick = function(){
   var responses = [];
    var responseElements = document.getElementByClassName("response");

    for (var i = 0; i< responseElements.lengh; i++)
        responseElements.push(responseElements[i].value);

    var message = document.getElementById("message");
    message.innerHTML = "Hello" + responses[0] +" ,listen " + response[1] + ", gender"+response[2]+",age"+responses[3]+",ethnicity"+responses[4]+",zip code"+responses[5]+",favorite music"+responses[6]+",spend money"+responses[7]+", free music"+responses[8]+",how often";

};
