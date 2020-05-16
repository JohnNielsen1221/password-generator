// Assignment code here

var keylistOne = 'abcdefghijklmnopqrstuvwxyz'
var keylistTwo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var keylistThree = '1234567890'
var keylistFour = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'

var passPerameters = function() {
  var passLength = function() {
    var promptLength =  window.prompt('How many characters, between 1 and 128, would you like your password to be?');
      if (promptLength >= 1 && promptLength <= 128) {
        alert('Your password will be ' + promptLength + ' characters long!')
      } else {
        alert('You need to provide a valid answer. Try again!')
          return passLength();
      }
    console.log(promptLength);  
  }  
    passLength();

  var letterLower = function() {

  var promptLowercase =  window.prompt('Would you like to use Lowercase letters? Please type 1 for YES, or 2 for NO.');
  promptLowercase = parseInt(promptLowercase);
    switch (promptLowercase) {
      case 1:
        alert('You will have Lowercase letters in your password.');
        break;
      case 2: 
        alert('You will not have Lowercase letters in your password.');
        break;  
      default:
        alert('You did not pick a valid option. Try again!');
        letterLower();
        break;
    }
  console.log(promptLowercase);  
  }  
  letterLower();

  var letterUpper = function() {

  var promptUppercase =  window.prompt('Would you like to use Uppercase letters? Please type 1 for YES, or 2 for NO.');
  promptUppercase = parseInt(promptUppercase);
    switch (promptUppercase) {
      case 1:
        alert('You will have Uppercase letters in your password.');
        break;
      case 2: 
        alert('You will not have Uppercase letters in your password.');
        break;
      default:
        alert('You did not pick a valid option. Try again!');
        letterUpper();
        break; 
    }
  console.log(promptUppercase);  
  }  
  letterUpper();

  var passNumber = function() {

  var promptNumeric =  window.prompt('Would you like to use Numbers in your password? Please type 1 for YES, or 2 for NO.');
  promptNumeric = parseInt(promptNumeric);
    switch (promptNumeric) {
      case 1:
        alert('You will have Numbers in your password.');
        break;
      case 2: 
        alert('You will not have Numbers in your password.');
        break; 
      default:
        alert('You did not pick a valid option. Try again!');
        passNumber();
        break; 
    }
  console.log(promptNumeric);  
  }  
  passNumber();

  var passSpecial = function() {

    var promptSpecial =  window.prompt('Would you like to use Special Characters in your password? Please type 1 for YES, or 2 for NO.');
    promptSpecial = parseInt(promptSpecial);
      switch (promptSpecial) {
        case 1:
          alert('You will have Special Characters in your password.');
          break;
        case 2: 
          alert('You will not have Special Character in your password.');
          break; 
        default:
          alert('You did not pick a valid option. Try again!');
          passSpecial();
          break; 
      }
    console.log(promptSpecial);  
  }  
    passSpecial();
};
passPerameters();
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
