// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = null;
var lowercase = null;
var uppercase = null;
var numeric = null;
var specialChar = null;

  function generatePassword () {
    getLength();
    getCharTypes();
}
    if (lowercase){
      selection += `abcdefghijklmnopqurtuvwxyz`;
    }
    if (uppercase){
      `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    }
    if (numeric){
      selection += `1234567890`;
    }
    if (specialChar) {
      selection += "!#$%&()*+,-./:;<=>?@[}^_`{|}~'";
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
