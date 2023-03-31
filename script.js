var generateBtn = document.querySelector("#generate");

// Write password input
function writePassword() {
  const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
  const numbers = ["0123456789"];
  const specials = ["!@#$%^&*()_+-="];
  var password = "";
  var passwordLength = 0;
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt(
        "Please enter the desired password length between 8 and 128 characters:"
      )
    );
  }
  var inputisValid = false;
  if (!inputisValid) {
    var useLowercase = confirm(
      "Do you want to include lowercase letters in your password?"
    );
    var useUppercase = confirm(
      "Do you want to include uppercase letters in your password?"
    );
    var useNumbers = confirm(
      "Do you want to include numbers in your password?"
    );
    var useSpecials = confirm(
      "Do you want to include special characters in your password?"
    );
    inputisValid = useLowercase || useUppercase || useNumbers || useSpecials;
    if (!inputisValid) {
      alert("You must chose at least one character type for your password.");
    }
  }
  var charset = "";
  if (useLowercase) {
    charset += lowercase;
  }
  if (useUppercase) {
    charset += uppercase;
  }
  if (useNumbers) {
    charset += numbers;
  }
  if (useSpecials) {
    charset += specials;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
