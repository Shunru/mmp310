function foo(){
    alert("Hello");
}
foo();
console.log(typeof foo);
myFuction();
var bar = function(){
    document.write("world.");
}
bar();
console.log(typeof bar);
var greet = function(name, greeting){
var text = greeting +","+name;
document.write(text);
};

greet();
greet("Jenny","Hello");
greet("Jerry ","Hi");

var add = function (n1, n2){
    console.log(arguments);
    return n1 + n2;

};

var x = add(2,2);
var y = add(x, 2);
var z = add (x, y);
cocument.write("<p>" +add(x,y)+"</p>");


(function(x){
    alert(x);
})("Hwllo world!");


var assign = function(){
    var n = 0;
    var m = 1;
};

var multiply = function(){
    return n * m;

};
assign();
multiply();

var j;
var k;


var assignValue = function(){
    j = 5;
    k = 2;

};
var divide = function(){
    return j/ k;

};
assignValue();
val l = divide();
document.write("<p>+l+"</p>");




