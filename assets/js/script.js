// Assignment code here
var lowlet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Uplet = ["A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
var numbers = [ "0", "1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9"]
var specialchar = [ "%", "^", "&", "*", "(", ")","!", "@", "#", "$", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
  function writePassword() {
  var password = generatePassword(math.floor(math.random()));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").innerHTML = "This is your new password";




 
//const letters = "ABCDEFGHIJKLMNOPQRSTUVWXY Zabcdefghijklmnopqrstuvwxyz";

//const letter = letters[0]; // "A"
//const randomLetter = letters[Math.floor(Math.random() * letters.length)]; // random letter ;)
// // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
// var num = Math.floor(Math.random() * 10) + 1;