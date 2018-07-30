// Assignment operator =
var num1 = 10;
console.log("num1 : " + num1);

// Arithmetic operators + - * /
var a =10;
var b = 20;
//var sum  = a + b;
console.log("a + b is :" + (a+b));

var mul = a * b;
console.log("a * b is :" + mul);
//document.getElementById('display').innerHTML =

// Short hand math += , -= , *= , /=
a= 10;
b= 20;
var add = 0;
add = add + (a+b); //long way
add +=(a +b);//add = add +(a+b)
console.log('add : ' + add); //60

// Conditional operators < , > , <= , >= , !=
var age = 25;
if (age <= 18) {
    console.log("your are Minor");
}
else{
    console.log("your are Majar");
}

// Unary Operator ++ , -- (pre , post)

var x=10;
x = x +1;//11
x += 1;//12
x++;//13
console.log("x:" + x);


// Logical operators AND , OR
var inRelation =true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log("Get Marry soon")
}
else{
    console.log("Wait untill parents agreed");
}

// String Concatenation Operator
var str = "10" + 10 + 10 + 10;
console.log('str :' +str);

// Ternary operator (? :)
age = 25;
(age <= 18) ? console.log("you are miner") : console.log("you are majar");

// Type of operator
var abc;

console.log('value :' +abc+ ' datatype :' +typeof abc);

var abc=10;

console.log('value :' +abc+ ' datatype :' +typeof abc);

var abc='test';

console.log('value :' +abc+ ' datatype :' +typeof abc);

var abc=true;

console.log('value :' +abc+ ' datatype :' +typeof abc);

var abc=null;

console.log('value :' +abc+ ' datatype :' +typeof abc);

// == operator
 a=10;
 b='10';

if(a==b){
    console.log("both are equal")
}
else{
    console.log('both are not equal');
}

// === operator

 a=10;
 b='10';

if(a===b){
    console.log("both are equal")
}
else{
    console.log('both are not equal');
}