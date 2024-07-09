console.log(" You are tasked with building a Recipe Management System using JavaScript");

const addUserBtn = document.getElementById('addUser');
const btnText = addUserBtn.innerText;
const usernameTextField = document.getElementById('username');
const descriptionTextField = document.getElementById('description');
const completedTextField = document.getElementById('completed');
const recordsDisplay = document.getElementById('records');
let userArray = [];
let edit_id = null;
let allTr;

let objStr = localStorage.getItem('users');

if (objStr != null) {
   userArray = JSON.parse(objStr);
}

DisplayInfo();
addUserBtn.onclick = () => {
   //get user's name and description from text fields
   const name = usernameTextField.value;
   const description = descriptionTextField.value;
   const completed = completedTextField.value;
 
   if (edit_id != null) {
     //edit action
     userArray.splice(edit_id, 1, {
       'name': name,
       'description': description,
       'completed': completed,
     });
     edit_id = null;
   } else {
     //insert action
     userArray.push({
       'name': name,
       'description': description,
       'completed': completed,
     });
   }
 
   SaveInfo(userArray);
 
   usernameTextField.value = '';
   descriptionTextField.value = '';
   completedTextField.value = '';
 
   addUserBtn.innerText = btnText;
 }
 

// store user's name in local storage
function SaveInfo(userArray) {
   let str = JSON.stringify(userArray);
   localStorage.setItem('users', str );
   DisplayInfo();
}

// display user's name
function DisplayInfo() {
   let statement = '';
   userArray.forEach((user, i) => {
      statement += `<tr>
           <th scope="row">${i+1}</th>
           <td>${user.name}</td>
           <td>${user.description}</td>
           <td>${user.completed}</td>
           <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
         </tr>`;
   });
   recordsDisplay.innerHTML = statement;

//select all tr of table
allTr = document.querySelectorAll('#records tr');
}

// edit user's name
function EditInfo(id) {
   edit_id = id;
   usernameTextField.value = userArray[id].name;
   descriptionTextField.value = userArray[id].description;
   completedTextField.value = userArray[id].completed;
   addUserBtn.innerText = 'Save Changes';
}

//delete user's name
function DeleteInfo(id) {
   userArray.splice(id, 1);
   SaveInfo(userArray);

}

//search feature code
//get text as query from search text field
const searchInputField = document.querySelector('#search');
searchInputField.addEventListener('input', function (e) {
   const searchStr = e.target.value.toLowerCase();
   recordsDisplay.innerHTML = '';
   allTr.forEach(tr => {
      const td_in_tr = tr.querySelectorAll('td');
      if (td_in_tr[2].innerText.toLowerCase().indexOf(searchStr) > -1) {
         recordsDisplay.appendChild(tr);
      }
   });

   if (recordsDisplay.innerHTML == '') {
      recordsDisplay.innerHTML = ' No Records Found';
   }
});