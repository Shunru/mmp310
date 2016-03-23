function randomPassword(length){
    var spcval = document.getElementById("specialkey");
    var spc = spcval.value;
    
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    
    if(spc === "Yes"){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{};&*%#$@!/?<>'";
    }
    
    var password ="";
    for (var x =0; x <length; x++){
        i = Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
        
    }
    document.getElementById("result").innerHTML = passwd;
}
    
    
    function formSubmit(){
        passform.passbox.value= randomPassword(passform.length.value);
    }
  
