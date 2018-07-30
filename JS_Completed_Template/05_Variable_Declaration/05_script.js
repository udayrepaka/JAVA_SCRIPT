// Create two variables and display their sum

var a =10;
var b =20;
sum = a+b;
console.log("sum of a,b is:"+ sum);
document.getElementById('display').innerHTML = "Sum of a , b is " + sum;


// Find the biggest value between 2 numbers

var p =20;
var q =30;

if (p > q){
   // console.log("the big value is :" +p);
    document.getElementById('display').innerHTML = "the big value is "+p;
}
else{
    //console.log("the big value is :" +q);
    document.getElementById('display').innerHTML = "the big value is "+q;
}


// Find the biggest value among 3 numbers
var x =10;
var y =20;
var z =30;
if(x > y && x > z){
    console.log("the biggest value is:"+x );
}
else if (y > z){
    console.log("the biggest value is:"+y);
}
else{
    console.log("the biggest value is:"+z );
}
