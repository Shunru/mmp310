function myFunction(length){
    var password="";
    var spcval = document.getElementById("specialkey");
    var spc = spcval.value;
    
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    
    if(spc === "Yes"){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{};&*%#$@!/?<>'";
    }
    
   
    for (var i =0; i <length; i++){
        console.log(i);
        
        var c = Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
        
    }
  
}

  function myFunction(){
      myform.passbox.value = myFunction(myform.length.value);
  }
    
document.getElementById("result").innerHTML = password;

 
   
    
