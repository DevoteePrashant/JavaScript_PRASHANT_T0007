

  const form = document.querySelector('form');
const urlInput = document.querySelector('#url');
const addButton = document.querySelector('.add');
const galleryContainer = document.querySelector('.gallery');

const icon = document.createElement('div');



form.addEventListener('submit', function(event) {
  event.preventDefault() 
  const url = urlInput.value.trim();
  if(url){
       const img = document.createElement('img');
       const icon = document.createElement('div');
       const deleteButton = document.createElement('button');
       deleteButton.addEventListener('click', function() { 
         img.remove(); 
         icon.remove();
         deleteButton.remove(); 
       });
      img.src = url 
      img.alt = "upload img"
      galleryContainer.appendChild(img);
      galleryContainer.appendChild(icon);
      deleteButton.appendChild(icon);
      icon.innerHTML =  `<i class="fa-brands fa-x-twitter"></i>`
      icon.style =  "font-size:29px"
      galleryContainer.appendChild(deleteButton);
      urlInput.value =''
     }
})


