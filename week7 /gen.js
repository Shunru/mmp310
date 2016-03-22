function randomPassword(length){
    var keyval = document.getElementById("key");
    var key = keyval.value;
    
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    
    if(key === "ON"){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{};&*%#$@!/?<>'";
    }
    pass ="";
    for (var i =0; i <length; i++){
        i = Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
        
    }
    document.getElementById("passwd").innerHTML = password;
    
    function formSubmit(){
        passform.passbox.value= randomPassword(passform.length.value);
    }
  
}