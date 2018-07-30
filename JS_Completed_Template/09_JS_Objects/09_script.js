//creation of objects , adding properties ,  retrieval
var obj= {};
    obj.name = 'john';
    obj.age = 45;

console.log(obj);

//declaring Object Literals
var emp ={
    name : 'william',
    age : 35,
    designation : 'Manager'
};

console.log(emp);

//Access existing properties
console.log(emp.name);//william

//Access Non Existing Properties
console.log(emp.salary);//undefined

// Usage of Dot and [] notations
var std = {
    name : 'Rajan',
    age : 22,
    100 : 'test'// invalid property
};
// use of [] notation where dot is not used for invalid identifiers
//console.log(std.100); -- We can't access with dot notation
 console.log(std[100]);// -- We can access with [] notation

// use of [] notation for accessing dynamic properties
var car={
    model :'BenZ',
    year : 2018,
    color : 'white'
};
var dynaProp = 'model';
console.log(car.dynaProp);//undefined
console.log(car[dynaProp]); //Benz

dynaProp = 'year';
console.log(car[dynaProp]);// year

dynaProp = 'color';
console.log(car[dynaProp]);//white

dynaProp = 'mileage';
console.log(car[dynaProp]);//undefined

// nested Objects creation
var student = {
    name : 'Rajan',
    age : 32,
    address :{
        city : 'Hyderabad',
        state : 'Telangana',
        country : "India"
    }
};
console.log(student);
//Accessing them using dot notation
console.log(student.address.city); // hyderabad

//Accessing them using mix of dot and [] notation
console.log(student.address['country']); // India

// Add some properties to nested object and access them
student.address.street = 'Ameerpet';
console.log(student);
console.log(student.address.street); //Ameerpet

// === operator demo for objects (if pointing to same location in memory)
var std1 = {
    name : "Rajan",
    age: 21
};

var std2 = std1;// both are pointed to same object

if(std1 === std2){
    console.log("both are equal");// true
}
else{
    console.log("both are not equal");
}

// deleting a property from an object
console.log(student);
delete student.address;// to delete the address object
console.log(student);

