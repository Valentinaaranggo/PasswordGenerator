// Assignment Code
var lowercaseOptions=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseOptions=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericOptions= [0,1,2,3,4,5,6,7,8,9];
var specialOptions= [" ","!","\"","#","$","%","&","'","(",")","*",",","-",".","/",":",";","<","=",">","?","@","[","]","\\","^","_","`","{","|","}","~"];
var password="";



// Write password to the #password input

function generatePassword(){
  var passwordLength=window.prompt("How many characters? (8 to 128 characters)?");
  if (passwordLength<8 || passwordLength>128){
    alert("please re-enter a password length between 8 to 128 characters!")
    generatePassword();
  }
  var lowercaseConfirm=window.confirm("Would you like to include lowercase characters?");
  var uppercaseConfirm=window.confirm("Would you like to include uppercase characters?");
  var numericConfirm=window.confirm("would you like to include numeric values?");
  var specialConfirm=window.confirm("would you like to include special characters?")



  if(lowercaseConfirm&&uppercaseConfirm&&numericConfirm&&specialConfirm){
    var merged= lowercaseOptions.concat(uppercaseOptions,numericOptions,specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
      return password;
  }else if(lowercaseConfirm&&uppercaseConfirm&&numericConfirm){
    var merged= lowercaseOptions.concat(uppercaseOptions,numericOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if (lowercaseConfirm&&uppercaseConfirm&&specialConfirm) {
    var merged= lowercaseOptions.concat(uppercaseOptions,specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;
    
  }else if (uppercaseConfirm&&numericConfirm&&specialConfirm){
    var merged= uppercaseOptions.concat(numericOptions,specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(lowercaseConfirm&&numericConfirm&&specialConfirm){
    var merged= lowercaseOptions.concat(numericOptions,specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;
    

  }else if(lowercaseConfirm&&uppercaseConfirm){
    var merged= lowercaseOptions.concat(uppercaseOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(lowercaseConfirm&&numericConfirm){
    var merged= lowercaseOptions.concat(numericOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(lowercaseConfirm&&specialConfirm){
    var merged= lowercaseOptions.concat(specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(uppercaseConfirm&&numericConfirm){
    var merged= uppercaseOptions.concat(numericOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(uppercaseConfirm&&specialConfirm){
    var merged= uppercaseOptions.concat(specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(numericConfirm&& specialConfirm){
    var merged= numericOptions.concat(specialOptions);
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* merged.length);
      var character= merged[index];
      password+= character;
    }
    return password;

  }else if(lowercaseConfirm){
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* lowercaseOptions.length);
      var character= lowercaseOptions[index];
      password+= character;
    }
    return password;

  }else if(uppercaseConfirm){
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* uppercaseOptions.length);
      var character= uppercaseOptions[index];
      password+= character;
    }
    return password;

  }else if(numericConfirm){
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* numericOptions.length);
      var character= numericOptions[index];
      password+= character;
    }
    return password;

  }else if (specialConfirm) {
    for (i=0;i<passwordLength;i++){
      var index=Math.floor(Math.random()* specialOptions.length);
      var character= specialOptions[index];
      password+= character;
    }
    return password;

  }else{
    alert("please select at least one character type!")
    generatePassword();

  }
}
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
