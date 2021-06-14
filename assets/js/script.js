
// Assignment code here
 
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
var upperCase = lowerCase.toUpperCase();
var userPassword = "";
var passwordGroup = "";
var passwordlength;
var pLowerCase;
var pUpperCase;
var pNumber;
var pSpecial;
var passwordlength = 0;

// Function to write the password

function writePassword() {
    
    plength = parseInt(prompt(" How many characters would you like your password to be ? minimum of 8 or maximum of 128 characters", ""));
   
    while (isNaN(passwordlength)) {
        plength = parseInt(prompt("Invalid option, Please enter a number between 8 & 128", ""));
    }

    while ( passwordlength < 8 || passwordlength > 128) {
      passwordlength = parseInt(prompt("Enter a number between 8  & 128 characters", ""));
    }

    pLowerCase = confirm(" Would you like to include lower case letters?");
    ptUpperCase = confirm("Would you like unclude upper case letters?");
    pNumber = confirm("Would you like to use numbers?"); 
    pSpecial = confirm("Would you like to use special characters?");
    
    var password = generatePassword();

    document.querySelector("#password").value = password; 
}

// Add event listener to generate button

generate.addEventListener("click", writePassword);
generatePassword();
document.getElementById("password").innerHTML = userPassword;

// Funtion to generate random password



 
