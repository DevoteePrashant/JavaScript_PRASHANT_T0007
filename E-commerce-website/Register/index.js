const form = document.querySelector('#form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const existingData = localStorage.getItem('userData for Register');
let userDataArray = existingData? JSON.parse(existingData) : [];


if (existingData) {
    userDataArray = JSON.parse(existingData);
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (validateInputs()) {
        console.log("Form submitted successfully");
        console.log(`Name: ${fname.value} ${lname.value}`);
        console.log(`Email: ${email.value}`);

        const userData = {
            fname: fname.value.trim(),
            lname: lname.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
        };


        // Check if email or password already exists in localStorage
        const existingEmail = userDataArray.find(user => user.email === userData.email);
        const existingPassword = userDataArray.find(user => user.password === userData.password);
        if (!existingEmail && !existingPassword) {
            userDataArray.push(userData);
            localStorage.setItem('userData for Register', JSON.stringify(userDataArray));
        } else {
            console.log("Email already exists in localStorage");
        }
        window.location.href ='../Login/login.html';
    }
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



function validateInputs() {
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    let success = true;

    if (fnameVal === '') {
        success = false;
        setError(fname, 'First name is required');
    } else {
        setSuccess(fname);
    }

    if (lnameVal === '') {
        success = false;
        setError(lname, 'Last name is required');
    } else {
        setSuccess(lname);
    }

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

    if (cpasswordVal === '' || cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Confirm password is required and must match the password');
    } else {
        setSuccess(cpassword);
    }

    return success;
}

//  login data

