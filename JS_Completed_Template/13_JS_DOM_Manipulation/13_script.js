//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('Width of the browser is : ' + width + 'px');

// Height of the browser
var height = window.innerHeight;
console.log('Height of the browser is : ' + height + 'px');

// Open a new Tab
//window.open();

// print the current doc
//window.print();

// DOM Properties to get body , title , URL
var body = document.body;
console.log(body);

var title = document.title;
console.log(title);
document.title = "New Title";

var url = document.URL;
console.log(url);

//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events

var paragraph = document.getElementById('para');
console.log(paragraph);
paragraph.textContent = "Changed from JavaScript";
paragraph.style.color = 'white';
paragraph.style.fontSize = '55px';

var heading = document.querySelector('h2');
console.log(heading);
heading.textContent = "11AM Batch";
heading.style.backgroundColor = 'red';
heading.style.color = 'white';

var formDiv = document.querySelector('#form-div');
console.log(formDiv);
formDiv.style.backgroundColor = 'forestgreen';
formDiv.style.marginTop = '15px';

// to get the Text Box
var textBox = document.querySelector('#username');
console.log(textBox);
textBox.style.height = '35px';
textBox.style.fontSize = '18px';
textBox.style.border = '2px solid yellow';


function getData() {
    console.log('Submit Button Clicked');
    var textValue = textBox.value;
    alert('You Entered ' + textValue);
    if(textValue === 'abc'){
        textBox.style.borderColor = 'red';
    }
    else{
        textBox.style.borderColor = 'pink';
    }
}


// JS Event Listeners
// get the element
var submitButton = document.querySelector('#submit');

// hookup an event Listener
submitButton.addEventListener('click',login);

// create a function
function login() {
    console.log('Submit Button Clicked');
    var textValue = textBox.value;
    //alert('You Entered ' + textValue);
    if(textValue === 'abc'){
        textBox.style.borderColor = 'blue';
    }
    else{
        textBox.style.borderColor = 'red';
    }
}

// Keyup Event Listener for TextBox

textBox.addEventListener('keyup',validateUser);

function validateUser() {
    console.log('Submit Button Clicked');
    var textValue = textBox.value;
    var userError = document.querySelector('#user_error');
    //alert('You Entered ' + textValue);
    if(textValue === ''){
        textBox.style.borderColor = 'yellow';
        userError.textContent = '';
    }
    else{
        if(textValue === 'abc'){
            textBox.style.borderColor = 'blue';
            userError.textContent = 'Correct User Name';
        }
        else{
            textBox.style.borderColor = 'red';
            userError.textContent = "Invalid User Name";
            userError.style.color = 'red';
        }
    }
}