const form2 = document.querySelector('#form2');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const existingData = localStorage.getItem('userData for Register');
let userDataArray = existingData ? JSON.parse(existingData) : [];

form2.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (validateInputs()) {
    console.log("Form submitted successfully");
    console.log(`Email: ${email.value}`);

    const userData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };

    let existingUser = false;
    for (let i = 0; i < userDataArray.length; i++) {
      if ( existingEmail = userDataArray.find(user => user.email === userData.email && user.password === userData.password)) {
        existingUser = true;
        break;
      }
    }


    if (existingUser) {
      console.log("Login successful");
       window.location.href = '../Shopping/Shopping.html';
    } else {
      console.log("Login failed");
       window.location.href = '';
    }
  }
}

function validateInputs() {
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  let success = true;

  if (emailVal === '') {
    success = false;
    setError(email, 'Email is required');
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, 'Please enter a valid email');
  } else {
    setSuccess(email);
  }

  if (passwordVal === '') {
    success = false;
    setError(password, 'Password is required');
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, 'Password must be at least 8 characters long');
  } else {
    setSuccess(password);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerText = message;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerText = '';
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


// rest password

document.getElementById('forgot-password').addEventListener('click', function(event) {
  event.preventDefault();
  var form = document.getElementById('reset-password-form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

document.getElementById('reset-btn').addEventListener('click', function(event) {
  event.preventDefault();
  var newPassword = document.getElementById('new-password').value;
  var confirmNewPassword = document.getElementById('confirm-new-password').value;

  if (newPassword === '') {
    document.getElementById('new-password').nextElementSibling.style.color = 'red';
document.getElementById('new-password').nextElementSibling.innerHTML = 'Please enter a new password';
  } else if (newPassword.length < 8) {
    document.getElementById('new-password').nextElementSibling.style.color = 'red';
    document.getElementById('new-password').nextElementSibling.innerHTML = 'Password must be at least 8 characters';
  } else {
    document.getElementById('new-password').nextElementSibling.innerHTML = '';
  }

  if (confirmNewPassword === '') {
    document.getElementById('confirm-new-password').nextElementSibling.style.color = 'red';
    document.getElementById('confirm-new-password').nextElementSibling.innerHTML = 'Please confirm your new password';
  } else if (confirmNewPassword !== newPassword) {
    document.getElementById('confirm-new-password').nextElementSibling.style.color = 'red';
    document.getElementById('confirm-new-password').nextElementSibling.innerHTML = 'Passwords do not match';
  } else {
    document.getElementById('confirm-new-password').nextElementSibling.innerHTML = '';
  }

  if (newPassword !== '' && confirmNewPassword !== '' && newPassword === confirmNewPassword) {
    const existingData = localStorage.getItem('userData for Register');
    let userDataArray = existingData ? JSON.parse(existingData) : [];

    for (let i = 0; i < userDataArray.length; i++) {
      if (userDataArray[i].email === email.value) {
        userDataArray[i].password = newPassword;
        break;
      }
      
    }

    localStorage.setItem('userData for Register', JSON.stringify(userDataArray));
    alert('Password reset successful!');
    
  }
});