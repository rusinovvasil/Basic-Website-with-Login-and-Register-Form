function toggleLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.classList.toggle("hidden");
  loginForm.classList.toggle("show");
}

function toggleRegisterForm() {
  var registerForm = document.getElementById("registerForm");
  registerForm.classList.toggle("hidden");
  registerForm.classList.toggle("show");
}

function validateUsername() {
  let usernameInput = document.getElementById("username");
  let usernameValue = usernameInput.value;
  // Perform custom validation logic
  if (!/^[a-zA-Z0-9]+$/.test(usernameValue)) {
    alert("Please enter only alphanumeric characters for the username.");
    return false;
  }
  return true;
}

document.getElementById("password").addEventListener("input", function () {
  var passwordStrength = document.getElementById("passwordStrength");
  var strength = calculatePasswordStrength(this.value);
  passwordStrength.textContent = "Password Strength: " + strength;
});

function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

let registeredUsers = [];

// Registration function
function registerUser(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form elements
  let usernameInput = document.getElementById("username");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  // Validate the form fields
  if (
    validateUsername(usernameInput.value) &&
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value)
  ) {
    // Create an object with the user data
    let userData = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Store the user data in the array
    registeredUsers.push(userData);

    // Clear the registration form fields
    clearRegistrationForm();

    // Toggle between registration and login forms
    toggleRegisterLoginForm();

    // Optional: Redirect to a success page or show a success message
    alert("Registration successful!");
  } else {
    // Optional: Display an error message or handle invalid input
    alert("Invalid input. Please check your information.");
  }
}

function clearRegistrationForm() {
  // Clear form fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmEmail").value = "";
  document.getElementById("confirmPassword").value = "";
}

function toggleRegisterLoginForm() {
  // Toggle visibility of registration and login forms
  toggleRegisterForm();
  toggleLoginForm();
}

function validateUsername(username) {
  // Implement your username validation logic
  return /^[a-zA-Z0-9]+$/.test(username);
}

function validateEmail(email) {
  // Implement your email validation logic
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  // Implement your password validation logic
  // For example, you may check for a minimum length or specific character requirements
  return password.length >= 8;
}

function login() {
  // Get form elements
  let loginUsernameInput = document.getElementById("loginUsername");
  let loginPasswordInput = document.getElementById("loginPassword");

  // Check if there are registered users
  if (registeredUsers.length > 0) {
    // Check if the entered login credentials match any registered user
    let matchingUser = registeredUsers.find(
      (user) =>
        user.username === loginUsernameInput.value &&
        user.password === loginPasswordInput.value
    );

    if (matchingUser) {
      // Change the page background color to blue directly in the CSS
      document.body.style.backgroundColor = "#3498db";
      // Redirect to a success page or show a success message
      alert("Login successful!");
      loginUsernameInput.value = "";
      loginPasswordInput.value = "";
    } else {
      // Display an error message for unsuccessful login
      alert("Invalid login credentials. Please try again.");
    }
  } else {
    // Display an error message if there are no registered users
    alert("No registered users found. Please register first.");
  }
}
