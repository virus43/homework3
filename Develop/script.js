// Assignment Code

var charTypes = {
  'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'lower': 'abcdefghijklmnopqrstuvwxyz',
  'number': '0123456789',
  'special': '!$%^&*()-=+[]{};#:@~,./<>?'
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowerCase = document.querySelector("#lowerCase").checked;
  var upperCase = document.querySelector("#upperCase").checked;
  var numeric = document.querySelector("#numbers").checked;
  var special = document.querySelector("#special").checked;
  var lengthPassword = document.getElementById('passwordLength').value

  if (isNaN(parseInt(lengthPassword))) {
    alert("Enter only numeric values for length. Input again!");
    return;
  }
  
  if (lengthPassword < 8 | lengthPassword > 128)  {
    alert("Password length must be between 8 to 128 characters. Input again!");
    return;
  }

  if (lowerCase == false & upperCase == false & numeric == false & special == false)  {
    alert("Select atleast 1 character type");
    return;
  }

  allChars="";

  if (lowerCase) {
    allChars += charTypes.lower
  }
  if (upperCase) {
    allChars += charTypes.upper
  }
  if (numeric) {
    allChars += charTypes.number
  }
  if (special) {
    allChars += charTypes.special
  }

  var password = generatePassword(lengthPassword, allChars);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(passwordLength, characters) {
  password="";
  for (var i = 1; i <= passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
