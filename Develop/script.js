// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Pseudocode
    // Gather user input on password requirements
    // input for # of characters
    // input for special characters
    // input for lowercase
    // input for uppercase
    // input for numbers

// Validate user input
    // number of characters between 8 and 128
    // what they answered true to include

// Decide how to choose what characters to include
// Randomly grab values from each included category
// Assemble passowrd string to be returned

// return "Hello";
};
