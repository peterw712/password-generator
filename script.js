var lowerCase = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '01234567890123456789012345678901234567890123456789';
var special = '!@#$%^&*~!@#$%^&*~!@#$%^&*~!@#$%^&*~!@#$%^&*~!@#$%^&*~';

passwordAttributes = [];

var length = prompt("Choose the length of your password (enter a number between 8 and 128)");
console.log (length);

var lowerCasePrompt = prompt("Do you want lower case letters in your password? yes/no")
switch(lowerCasePrompt) {
  case "yes":
    passwordAttributes.push(lowerCase);
    break;
  case "no":
    break;
}

var upperCasePrompt = prompt("Do you want upper case letters in your password? yes/no")
switch(upperCasePrompt) {
  case "yes":
    passwordAttributes.push(upperCase);
    break;
  case "no":
    break;
}

var numbersPrompt = prompt("Do you want numbers in your password? yes/no")
switch(numbersPrompt) {
  case "yes":
    passwordAttributes.push(numbers);
}

var specialPrompt = prompt("Do you want special characters in your password? yes/no")
switch(specialPrompt) {
  case "yes":
    passwordAttributes.push(special);
}

function generatePassword(length) {
  var result = '';
  while (result.length < length) {
  var randomAttribute = passwordAttributes[(Math.floor(Math.random() * passwordAttributes.length))]
  result += randomAttribute.charAt((Math.floor(Math.random() * randomAttribute.length)))};
  return result;}

var password = generatePassword(length);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
