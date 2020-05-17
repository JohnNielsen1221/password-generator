// Assignment code here
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start variable values: 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
// Write password to the #password input
  password = generatePassword();
  document.querySelector("#password");
});  

  function generatePassword() {
    enter = parseInt(prompt("How long would you like your password to be? Please enter a number between 8 and 128"));
    if (!enter || enter < 8 || enter > 128) {
      alert("Please enter a number between 8 and 128!");
      generatePassword();
     } else if (enter >= 8 && enter <= 128) {
        alert('Your password will be ' + enter + ' characters long.');
        confirmLowercase = confirm("Would you like to use Lowercase Letters in your password?");
        confirmUppercase - confirm("Would you like to use Uppercase Letters in your password?");
        confirmNumber = confirm("Would you like to use Numbers in your password?");
        confirmCharacter = confirm("Would you like to use Special Characters in your password?");
  } 
};