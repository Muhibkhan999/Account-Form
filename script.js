// Initialize an empty array to store user data
let users = [];

// Constructor for creating user objects
function User(username, password, email, gender, city) {
    return {
      username: username,
      password: password,
      email: email,
      gender: gender,
      city: city
    };
  }

// Email validation function using regex
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from form fields
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;
  let gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
  let city = document.getElementById('city').value;

  // Validation variables
  let usernameError = document.getElementById('usernameError');
  let passwordError = document.getElementById('passwordError');
  let emailError = document.getElementById('emailError');
  let genderError = document.getElementById('genderError');
  let cityError = document.getElementById('cityError');
  let successMessage = document.getElementById('successMessage');

  // Clear previous error messages
  usernameError.textContent = '';
  passwordError.textContent = '';
  emailError.textContent = '';
  genderError.textContent = '';
  cityError.textContent = '';
  successMessage.textContent = '';

  // Validation checks
  let valid = true;

  // Check username
  if (username.trim() === '') {
    usernameError.textContent = 'Username is required';
    valid = false;
  } else if (users.some(user => user.username === username)) {
    usernameError.textContent = 'Username already exists';
    valid = false;
  }

  // Check password
  if (password.trim() === '') {
    passwordError.textContent = 'Password is required';
    valid = false;
  }

  // Check email
  if (email.trim() === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Invalid email format';
    valid = false;
  } else if (users.some(user => user.email === email)) {
    emailError.textContent = 'Email already exists';
    valid = false;
  }

  // Check gender
  if (gender === '') {
    genderError.textContent = 'Gender is required';
    valid = false;
  }

  // Check city
  if (city === '') {
    cityError.textContent = 'City is required';
    valid = false;
  }

  // If valid, create user object and push to array
  if (valid) {
    let newUser = new User(username, password, email, gender, city);
    users.push(newUser);
    successMessage.textContent = 'Registration successful!';
    console.log(newUser);
  }
});
