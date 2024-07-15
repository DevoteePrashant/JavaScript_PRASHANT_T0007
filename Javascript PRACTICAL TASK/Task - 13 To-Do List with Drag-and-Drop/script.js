const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
      // change in web  class ad
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // change in web        remove class
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    // change in web   if select  opacity chang 
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // change in web
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // change in web  drag before  add  next sibling in drag [ lest index]
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());