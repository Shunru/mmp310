function randomPassword(length){
    var keyval = document.getElementById("key");
    var key = keyval.value;
    
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    
    if(key === "Yes"){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{};&*%#$@!/?<>'";
    }
    var pass ="";
    for (var x =0; x <length; x++){
        i = Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
        
    }
    
    
    function generate(){
        passform.passbox.value= randomPassword(passform.length.value);
    }
  
}