// creation of arrays
var array1=[10,20,30,40,50];


// Accessing an array and its properties
console.log(array1);
console.log(array1[0],array1[2]);

// Access not existed property from an array
console.log(array1[100]);

// adding properties to an array
array1[5] = 60;
console.log(array1);

// Accessing length of an Array
var len = array1.length;
console.log("the lenght of array :" +len);

// reverse the array using reverse()
array1.reverse();
console.log(array1);

// Remove the first value of the array: shift()

var arr1 = [10,20,30,40,50];
var output = 'before: ' +arr1.join();
document.getElementById('display1').innerHTML = output;
arr1.shift();
var output = 'after: ' +arr1.join();
document.getElementById('display2').innerHTML = output;

// Add value to front of the array:unshift()
 arr1 = [10,20,30,40,50];
output = 'before: ' +arr1.join();
document.getElementById('display1').innerHTML = output;
arr1.unshift(60,70);
output = 'after: ' +arr1.join();
document.getElementById('display2').innerHTML = output;

// Remove the last value of the array: pop()
arr1 = [10,20,30,40,50];
output = 'before: ' +arr1.join();
document.getElementById('display1').innerHTML = output;
arr1.pop();
output = 'after: ' +arr1.join();
document.getElementById('display2').innerHTML = output;


// Add value the end of the array: push()
arr1 = [10,20,30,40,50];
output = 'before: ' +arr1.join();
document.getElementById('display1').innerHTML = output;
arr1.push(60,70);
output = 'after: ' +arr1.join();
document.getElementById('display2').innerHTML = output;


// Remove an element from an Array , Arguments: colors.splice(pos,n):
arr1 = [10,20,30,40,50];
output = 'before: ' +arr1.join();
document.getElementById('display1').innerHTML = output;
arr1.splice(1,2);//20,30
output = 'after: ' +arr1.join();
document.getElementById('display2').innerHTML = output;


// Create a copy of an array. Typically assigned to a new variable:slice();
arr1 = [10,20,30,40,50];
output = 'before: ' +arr1.join();
document.getElementById('display1').innerHTML = output;
var arr2 = arr1.slice();// creates a new copy
output = 'after: ' +arr1.join();
document.getElementById('display2').innerHTML = output;
if(arr1 === arr2){
    console.log("both are equal");
}
else{
    console.log("both are not equal");// true
}

// indexOf()
arr1 = [10,20,30,40,50];
console.log("Index of 10 :" +arr1.indexOf(10));
console.log("Index of 30 :" +arr1.indexOf(30));
console.log("Index of 100 :" +arr1.indexOf(100));//-1

// Join()
arr1 = [10,20,30,40,50];
document.getElementById('display1').innerHTML = arr1.join(" + ");

// Prove an array is an Object
arr1 = [10,20,30,40,50];

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



//grocery function
var groceryItems = [];
function addItems() {
    var item = document.querySelector('#item').value;
    if(groceryItems.indexOf(item) === -1){
        groceryItems.push(item);
    }
    else{
        alert("Dude!! The " + item + " already Exists");
    }
    document.querySelector('#items').innerHTML = groceryItems.join(" , ");
    document.querySelector('#item').value = '';
}