console.log("login.js loaded");

// 1. Created Login Credentials
let userLogin = {
  username: "james",
  password: "secretword"
};

// 2. Prompt custom message for user, ask for their password
// 3.
var passwordProvided = prompt(`Enter password for ${userLogin.username}`);
if (passwordProvided !== userLogin.password) {
  alert ("Incorrect password");}
  else {console.log("Password Accepted.");
  }
