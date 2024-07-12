


function Dynamic() {
  username();
}

function username() {
  const name = prompt("Enter your name");
  if (name === "") {
    alert("Fill the value of name");
  } else {
    alert("Your value is fine");
  }
  createForm(name);
  checkbox();
  Submit();

}

// function clear() {
//   document.body.innerHTML = " "
// };

function Submit(){
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "button";
  input.value = "submit";
  input.className ="btn-grad";
  form.appendChild(input);
  document.body.appendChild(form);
  // clear();
}


function checkbox() {
  const Hobbs = prompt("Enter your Hobbs");
  if (Hobbs === "") {
    alert("Fill the value of hobbs");
  } else {
    alert("Your value is fine");
  }
  createCheckbox(Hobbs);
}

function createForm(value) {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.value = value;
  form.appendChild(input);
  document.body.appendChild(form);
  addStyle();
}

function createCheckbox(value) {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = value;
  form.appendChild(input);
  form.appendChild(label);
  document.body.appendChild(form);

}

function addStyle() {
  const inputStyle = document.createElement("style");
  inputStyle.innerHTML = `form { text-align: center; } input{margin : 16px} body{  height: 675px; background-image: linear-gradient(to bottom right, rgb(0, 89, 255), rgb(195, 0, 255), rgb(160, 7, 71)); }`;
  document.head.appendChild(inputStyle);
}

Dynamic();