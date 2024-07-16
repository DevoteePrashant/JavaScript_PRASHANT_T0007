


const getData = document.getElementById('getData')
const submit = document.getElementById('submit')
const sortableList = document.querySelector(".sortable-list");
const item = document.getElementById('item')

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const newValue = getData.value.trim(); 
    if (!newValue) return;
    // const  newValue  = getData.value;
    // console.log(newValue2);

    const createLi = document.createElement("li");
    createLi.className = "item";
    createLi.draggable = true;
    createLi.innerHTML = `   <button type="button" class="delete-btn" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="recycle-bin" style="width: 25px; height: 25px;"><path fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" d="M49,62H15a3,3,0,0,1-3-3V10H52V59A3,3,0,0,1,49,62Z"></path><line x1="6" x2="58" y1="10" y2="10" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"></line><path fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" d="M38,2H26a2,2,0,0,0-2,2v6H40V4A2,2,0,0,0,38,2Z"></path><line x1="24" x2="24" y1="20" y2="52" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"></line><line x1="32" x2="32" y1="20" y2="52" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"></line><line x1="40" x2="40" y1="20" y2="52" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"></line></svg></button>
        <div class="details">
          ${newValue}
        </div>
        <i class="uil uil-draggabledots" id="fio"></i>
     `;

    sortableList.appendChild(createLi)

//delete 
const deleteBtn = createLi.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
    createLi.remove(); 
});


    //clear
    getData.value = '';

    const items = sortableList.querySelectorAll(".item");

    items.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData('text/plain', ''); 
            setTimeout(() => item.classList.add("dragging"), 0);
        });

        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
        });
    });
});


    //    drag off
    sortableList.addEventListener("dragover", (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(sortableList, e.clientY);
        if (afterElement == null) {
            sortableList.appendChild(draggingItem);
        } else {
            sortableList.insertBefore(draggingItem, afterElement);
        }
    });



    //  drag star
    sortableList.addEventListener("dragenter", e => {
        e.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(sortableList, e.clientY);
        if (afterElement == null) {
            sortableList.appendChild(draggingItem);
        } else {
            sortableList.insertBefore(draggingItem, afterElement);
        }
    });


    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }


    
    // delete
//  list with id="myList"
const list = document.getElementById('myList');

function addDeleteButtons() {
    const items = list.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            this.parentNode.remove(); 
        });
        items[i].appendChild(deleteBtn);
    }
}

addDeleteButtons();
