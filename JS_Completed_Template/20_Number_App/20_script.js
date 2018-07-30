// Get the Number box
var numberBox = document.querySelector('#number');
var textNumberBox = document.querySelector('#text-number');
var textMessage = '';

// Hookup event Listener
numberBox.addEventListener('keyup',displayMessage);

// function Login
function displayMessage() {
    textMessage = '';
    var enteredNumber = numberBox.value.toString().trim();
    for(var i=0; i<enteredNumber.length; i++){
        var char = parseInt(enteredNumber.charAt(i));
        switch(char){
            case 0:
                textMessage += ' Zero ';
                break;
            case 1:
                textMessage += ' One ';
                break;
            case 2:
                textMessage += ' Two ';
                break;
            case 3:
                textMessage += ' Three ';
                break;
            case 4:
                textMessage += ' Four ';
                break;
            case 5:
                textMessage += ' Five ';
                break;
            case 6:
                textMessage += ' Six ';
                break;
            case 7:
                textMessage += ' Seven ';
                break;
            case 8:
                textMessage += ' Eight ';
                break;
            case 9:
                textMessage += ' Nine ';
                break;
            default :
                textMessage += '';
                break;
        }
    }
    textNumberBox.textContent = textMessage;
}