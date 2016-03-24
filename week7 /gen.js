function randomPassword(length){
    var password="";
    var spcval = document.getElementById("specialkey");
    var spc = spcval.value;
    
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    
    if(spc === "Yes"){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{};&*%#$@!/?<>'";
    }
    
   
    for (var i =0; i <length; i++){
        var c = Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
        console.log(i);
    }
  
}

  function onclick(){
      myform.passbox.value = randomPassword(myform.length.value);
  }
    
function myFunction(){
    document.getElementById("result").innerHTML= password;
}


document.getElementById("result").innerHTML = password;

 
   
    
