// get the input fields
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#password_confirm');

// get the error messages
var user_error = document.querySelector('#name_error');
var email_error = document.querySelector('#email_error');
var password_error = document.querySelector('#password_error');

// Hookup eventListeners for 'blur' event
username.addEventListener('blur',userverify);
email.addEventListener('blur',emailVerify);
password.addEventListener('blur',passwordVerify);
confirmPassword.addEventListener('blur',confirmPasswordVerify);


function validate() {
    var result = true;

    // Required UserName Validation
    if(username.value === ''){
        username.style.borderColor = 'red';
        user_error.textContent = 'UserName is Required';
        user_error.style.color = 'red';
        result = false;
        return result;
    }

    // Username Length 3 Validation
    if(username.value.length < 3){
        username.style.borderColor = 'red';
        user_error.textContent = 'Enter at least 3 letters';
        user_error.style.color = 'red';
        result  = false;
        return result;
    }

    // Required Email Validation
    if(email.value === ''){
        email.style.borderColor = 'red';
        email_error.textContent = 'Email is Required';
        email_error.style.color = 'red';
        result = false;
        return result;
    }

    // Required Password Validation
    if(password.value === ''){
        password.style.borderColor = 'red';
        password_error.textContent = 'Password is Required';
        password_error.style.color = 'red';
        result = false;
        return result;
    }

    // Required Confirm Password Validation
    if(confirmPassword.value === ''){
        confirmPassword.style.borderColor = 'red';
        password_error.textContent = 'Confirm Password is Required';
        password_error.style.color = 'red';
        result = false;
        return result;
    }

    // Password Match validation
    if(password.value !== confirmPassword.value){
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
        password_error.textContent = "Passwords didn't Match";
        password_error.style.color = 'red';
        result = false;
        return result;
    }

    if(result === false){
        return false;
    }
    else{
        alert('Form Submitted');
    }
}

// User verify
function userverify() {
    username.style.borderColor = 'gray';
    user_error.textContent = '';
}

// Email Verify
function emailVerify() {
    email.style.borderColor = 'gray';
    email_error.textContent = '';
}
// Password Verify
function passwordVerify() {
    password.style.borderColor = 'gray';
    confirmPassword.style.borderColor = 'gray';
    password_error.textContent = '';
}
// Confirm Password Verify
function confirmPasswordVerify() {
    confirmPassword.style.borderColor = 'gray';
    password.style.borderColor = 'gray';
    password_error.textContent = '';
}
