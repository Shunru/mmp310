var submit = document.getElementById("submit");
submit.onclick = function(){
    var playmusic = document.getElementById("playmusic").value;
    var gender = document.getElementById("gender").value;
    var age= document.getElementById("age").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var zipcode = document.getElementById("zipcode").value;
    var musicgenre = document.getElementById("musicgenre").value;
    var money = document.getElementById("money").value;
    var website = document.getElementById("website").value;
    var listen = document. getElementById("listen").value;
    console.log(playmusic,gender,age,ethnicity,zipcode,musicgenre,money,website,listen);
    var message = document.getElementById("message");
    message.innerHTML = "Hello" + name +" ,from " + musicgenre + ", welcome to my Music Servey Workshop.";

};
