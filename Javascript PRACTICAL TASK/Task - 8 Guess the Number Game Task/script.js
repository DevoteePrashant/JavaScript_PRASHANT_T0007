let showboat = [];
var show = new Array(100);
for (var i = 0; i < show.length; i++) {
    console.log(showboat.push(show));
}

function generatePassword() {
    var length = 2,
        charset = "123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
var randomVal = generatePassword();
console.log(randomVal);

document.getElementById("Guess").addEventListener("click", Guess);

function Guess() {
    let field_find_element = document.getElementById('field_find');
    let field_find = field_find_element.value;
    let success = true;

    if (field_find === '') {
        success = false;
        setError(field_find_element, 'number is requied');
    } else if (field_find.length < 2) { 
        success = false;
        setError(field_find_element, 'number must be at least 2 characters long'); 
    } else {
        setSuccess(field_find_element);
    }

    if (randomVal !== field_find) {
        success = false;
        setError(field_find_element, 'Confirm random number is required and must match the number');
    } else {
        setSuccess(field_find_element);
    }

    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('#error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('#error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
