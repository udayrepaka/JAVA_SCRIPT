//creation of a simple function with no args and execute a function
var greeting  = "Good Afternoon";
console.log(greeting);

function greet() { // function definition or deculration
    var greeting = "Good Morning";
    console.log(greeting);
}

greet();// function call

//creation of a simple function with args
function greetArgs(name) {
    var greeting = "Good Morning" + name;
    console.log(greeting);
}
 greetArgs(" uday ");

// executing a function with less number of params
function greetLessArgs(name,age) {
    var greeting = "hello " + name +"your are " + age + "year of old!!"
    console.log(greeting);
}
greetLessArgs("uday");

//executing a function with more number of params
function greetMoreArgs(name) {
    var greeting = "Heloo " + name + "Good Morning";
    console.log(greeting);
}
greetMoreArgs('uday ',40);

//function overloading is not possible here


// functions with return values
function greetreturn(name) {
    var greeting = "Good afternoon" + name;
    return greeting;
}
var output = greetreturn(" uday ");
console.log(output);

//function with empty return /no return
function greetNoReturn(name) {
    var greeting = "Good Morning" +name;
}
output = greetNoReturn("uday repaka");
console.log(output);

// function Expressions with name and execution
var greetExp = function greet() {
    console.log("I am a function experssion");
};

greetExp();

// Anonymous Function Expression and execution
var greetAnonymouos = function(name){
    console.log(name + " !! I am from Anonymous Function experssion");
};
greetAnonymouos("uday");

// Functions as arguments without args
function greet1(name) {
    console.log(name + "i am from greet 1");
}
function greet2(name2) {
    console.log(name2 + " i am from greet 2");
}
function greetEngine(fName1,name,fName2,name2) {
    fName1(name);
    fName2(name2);
}
greetEngine(greet1,' williams ', greet2,' uday ');
//greetEngine(greet2,' williams ');

// Functions as arguments with args args


// Functions in Objects and Execution
var student = {
    firstName : "Arjun",
    lastName  : "reddy",
    fullName :function(){
        console.log(this.firstName + " "+ this.lastName);
    }
};
console.log(student.fullName());


// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var emp ={
    name :'john',
    age : 35,
    designation:'Manager',
    address :{
        city : 'Hyderabad',
        state : "Telangana",
        country : "India"
    },
    isFromState : function(state){
        return(state === this.address.state);
    }
};

console.log('is from TS? :' + emp.isFromState("Telangana"));


// Default Function Arguments (arguments)
function defaultArgs() {
    console.log(arguments);
}
defaultArgs('John0',40,'Manager');
