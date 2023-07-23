const generatePassword = require("generate-password");

// Function to generate random passwords
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true,
  });

  return password;
}

// Console.log the generated password
console.log("Generated Password:", generateRandomPassword());
