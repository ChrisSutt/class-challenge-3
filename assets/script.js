// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = null;
var lowercase = null;
var uppercase = null;
var numeric = null;
var specialChar = null;

function generatePassword(){
  getLength();
  getCharTypes();
  
  var selection = '';
  var result = '';

  if(lowercase){
    selection += 'abcdefghijklmnopqrstuvwxyz';
  }
  if(uppercase){
    selection += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if(numeric){
    selection += '1234567890';
  }
  
  if(specialChar){
    selection += '!#$%&()*+,-./:;<=>?@[}^_`{|}~';
  }
  
  const selectionLength = selection.length;
  for(x = 0; x < length; x++){
    result += selection.charAt(Math.floor(Math.random() * selectionLength));
  }

  return result;
}

function getLength(){
  length = prompt("Select Password Length", "At lease 8 characters, no more than 128 characters");
  
  if (length < 8 || length > 128){
    alert("Password must be greater then 8 characters!")
    if(length === null){
      return "Your Secure Password";
    }
    getLength();
  }
  else if(isNaN(length)){
    alert("A number between 8 and 128 must be selected!");
    length = null;
    getLength();
  }
  console.log("Character Count:" + length);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
