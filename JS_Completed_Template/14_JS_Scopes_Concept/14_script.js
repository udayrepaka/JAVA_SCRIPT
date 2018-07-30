// functions recap

// Scopes introduction

// Block scoping for FOR loop
for(var i=0; i<=10 ; i++){
    console.log("i value :" +i);
}

console.log("i value outside for :" +i);

//Block scoping for if Block
var course = 'mpc';
var outer =20;
function allocateDept() {
    var outer = 50;
    if (course === 'mpc'){
        var dept = "Engineering";
    }
    console.log('Dept name :'+dept); //engineering
    console.log(outer);
}
allocateDept();
console.log('course name :' +course);
console.log(outer);
//console.log(false +1);
// Function Scoping

// coding exercises

// 1) output ?

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);//no output
}

// 2) output ?
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);//30
}
something();

// 3) output ?
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();// 30

// 4) output ?

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();//undefined
console.log(inner);// 50

// 6) output ?
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);// hello john
}

greet("John");

//  IIFE example

(function() {
    var outer = 50;
    if (course === 'mpc'){
        var dept = "Engineering";
    }
    console.log('Dept name :'+dept); //engineering
    console.log(outer);
})();


// Read and Write Operations for variables
//read --- declare  //write --- must not declare
var a=10;// write

console.log(a);//read

var b =a;//both
// Read and Write Operations for Functions


// Implications of Read and Write Operations

