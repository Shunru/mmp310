function randomPassword(length){
    var spcval = document.getElementById("specialkey");
    var spc = spcval.value;
    
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    
    if(spc === "Yes"){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{};&*%#$@!/?<>'";
    }
    
    var pass ="";
    for (var i =0; i <length; i++){
        i = Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
        console.log(i);
    }
  
}

function myFunction(){
    document.getElementById("myForm").submit();
}

  function myFunction(){
      myform.passbox.value = randomPassword(myform.length.value);
  }

document.getElementById("result").innerHTML = passbox;
