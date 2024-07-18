const addUserBtn = document.getElementById('addUser');
    const btnText = addUserBtn.innerText;
    const usernameTextField = document.getElementById('username');
    const completedTextField = document.getElementById('completed');
    const recordsDisplay = document.getElementById('records');
    let userArray = [];
    let edit_id = null;
    let allTr;

    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        userArray = data.slice(0, 10); // Limit to 10 items for simplicity
        DisplayInfo();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

    addUserBtn.onclick = async () => {
      const name = usernameTextField.value;
      const completed = completedTextField.checked;

      if (edit_id != null) {
        const user = userArray[edit_id];
        user.title = name;
        user.completed = completed;

        await updateUser(user);
        edit_id = null;
      } else {
        const newUser = {
          title: name,
          completed: completed,
        };

        await addUser(newUser);
      }

      usernameTextField.value = '';
      completedTextField.checked = false;
      addUserBtn.innerText = btnText;
      DisplayInfo();
    }

    async function addUser(user) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          body: JSON.stringify(user),
        });
        const newUser = await response.json();
        userArray.push(newUser);
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }

    async function updateUser(user) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${user.id}`, {
          method: 'PUT',
          body: JSON.stringify(user),
        });
        await response.json();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }

    async function deleteUser(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: 'DELETE',
        });
        userArray = userArray.filter(user => user.id !== id);
        DisplayInfo();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }

    function DisplayInfo() {
      let statement = '';
      userArray.forEach((user, i) => {
        statement += `<tr>
          <th scope="row">${i + 1}</th>
          <td>${user.title}</td>
          <td>${user.completed}</td>
          <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${user.id})'></i></td>
        </tr>`;
      });
      recordsDisplay.innerHTML = statement;

      allTr = document.querySelectorAll('#records tr');
    }

    function EditInfo(id) {
      edit_id = id;
      usernameTextField.value = userArray[id].title;
      completedTextField.checked = userArray[id].completed;
      addUserBtn.innerText = 'Save Changes';
    }

    function DeleteInfo(id) {
      deleteUser(id);
    }

    const searchInputField = document.querySelector('#search');
    searchInputField.addEventListener('input', function (e) {
      const searchStr = e.target.value.toLowerCase();
      recordsDisplay.innerHTML = '';
      allTr.forEach(tr => {
        const td_in_tr = tr.querySelectorAll('td');
        if (td_in_tr[0].innerText.toLowerCase().indexOf(searchStr) > -1) {
          recordsDisplay.appendChild(tr);
        }
      });

      if (recordsDisplay.innerHTML == '') {
        recordsDisplay.innerHTML = 'No Records Found';
      }
    });