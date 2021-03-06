// Assignment code here
// prompt user for password length
// go to shop between battles function

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var special = '!@#$%^&*~';

passwordAttributes = [];

var length = prompt("choose the length of your password (between 8 and 128 characters)");
console.log (length);

var lowerCasePrompt = prompt("do you want lower case letters in your password? yes/no")
switch(lowerCasePrompt) {
  case "yes":
    passwordAttributes.push(lowerCase);
    break;
  case "no":
    break;
}

var upperCasePrompt = prompt("do you want upper case letters in your password? yes/no")
switch(upperCasePrompt) {
  case "yes":
    passwordAttributes.push(upperCase);
    break;
  case "no":
    break;
}

var numbersPrompt = prompt("do you want numbers in your password? yes/no")
switch(numbersPrompt) {
  case "yes":
    passwordAttributes.push(numbers);
}

var specialPrompt = prompt("do you want special characters in your password? yes/no")
switch(specialPrompt) {
  case "yes":
    passwordAttributes.push(special);
}


console.log (passwordAttributes);

function generatePassword(length) {
  var result = '';
  while (result.length < length) {
  var randomAttribute = passwordAttributes[(Math.floor(Math.random() * passwordAttributes.length))]
  result += randomAttribute.charAt((Math.floor(Math.random() * randomAttribute.length)))};

  return result;}

console.log (generatePassword(length));

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
