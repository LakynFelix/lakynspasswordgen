
// Assignment code here
var lowlet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Uplet = ["A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
var numbers = [ "0", "1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9"]
var specialchar = [ "%", "^", "&", "*", "(", ")","!", "@", "#", "$", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
 


function generatePasswordInfo() {
 
  var Length = parseInt(prompt("How many characters would you like your password to have ?"));
    
    if(Length < 8 ) {
      alert("Choose a min of 8 and max of 128 characters.");
      generatePassword();
    }
    if(Length > 128 ) {
      alert("A Maximum number of 128 characters requried.");
      generatePassword();
    }
    if (isNaN(Length)) {
      alert("Invalid Please insert a number.");
      generatePassword();
    }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var question = confirm('Do you want to add Special Characters ?');


// Write password to the #password input
  function writePassword() {
  var password = generatePassword(math.floor(math.random()));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").innerHTML ="New Password";