function makePassword(){
    var password = "";
    var chars="abcdefghijklmnopqrstuvwxyzABCEEFGHIJKLMNOPFQRSTUVWXYZ0123456789";
    for (var i =0; i <10; i++){
        console.log(i);
        
        var c = Math.floor(Math.random()*chars.length);
        password += chars.chartAt(c)
    }
    return password;
}