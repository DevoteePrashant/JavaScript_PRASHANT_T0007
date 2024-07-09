  var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    id = document.getElementById("id").value,
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value;
                if(id === ""){
                    alert(" id Connot Be Empty");
                    isEmpty = true;
                }
                else if(fname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(lname === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }
            
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                cellID = newRow.insertCell(0),
                cell1 = newRow.insertCell(1),
                cell2 = newRow.insertCell(2),
                cell3 = newRow.insertCell(3),
                    id = document.getElementById("id").value,
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    checkbox1 = document.getElementById("checkbox1").value;
                    cell1.innerHTML = fname;
                    cell2.innerHTML = lname;
                    cell3.innerHTML = checkbox1;
                    cellID.innerHTML = id ;
                    // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("id").value = this.cells[0].innerHTML;
                      document.getElementById("fname").value = this.cells[1].innerHTML;
                      document.getElementById("lname").value = this.cells[2].innerHTML;
                      document.getElementById("checkbox1").value = this.cells[3].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var  id = document.getElementById("id").value,
                fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    checkbox1 = document.getElementById("checkbox1").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = id;
                table.rows[rIndex].cells[1].innerHTML = fname;
                table.rows[rIndex].cells[2].innerHTML = lname;
                table.rows[rIndex].cells[3].innerHTML = checkbox1;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("id").value = "";
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("checkbox1").value = "";
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
                  recordsDisplay.innerHTML = ' No Records Found';
               }
            });