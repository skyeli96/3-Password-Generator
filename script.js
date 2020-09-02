// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEL = document.getElementById("length");
var uppercaseEL = document.getElementById("UpperCase");
var lowercaseEL = document.getElementById("LowerCase");
var numbersEL = document.getElementById("numericNumber");
var specialEL = document.getElementById("specialCharacters");
var passwordText = document.querySelector("#password");

var lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz';
var upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericCharacters = '0123456789';
var specialCharacters =  "~=+%^*/()[]{}/!@#$?|";
  
  
var lengthInput = prompt("How many characters do you want your password?", id = "Between 12 to 128"); 
if (lengthInput > 128 || lengthInput< 8) {
  alert("Invalid input, please enter again between 8 to 128");
}
else {
  alert("Selected length is " + lengthInput);
  alert("1. Please tick the checkbox below by your preference" +"\r\n" + " 2.Click <Generate Password>."+ "\r\n\r\n" + "Note: At least one box needs to be ticked");
}


generateBtn.addEventListener("click",function() {

  var characters = "";
  (lowercaseEL.checked) ? characters += lowerCasedCharacters:'';
  (uppercaseEL.checked) ? characters += upperCasedCharacters:'';
  (numbersEL.checked) ? characters += numericCharacters:'';
  (specialEL.checked) ? characters += specialCharacters:'';
  // passwordText.value = generatePassword (lengthEL.value,characters);
  passwordText.value = generatePassword (lengthInput,characters);



});

function generatePassword (length,characters) {
  var password = '';
  for (var i=0;i<length;i++) {
    password += characters.charAt(Math.floor(Math.random()* characters.length));
  }

  return password;
}

//console.log(generatePassword(12,specialCharacters));
