
// let images = ['./img/back-img.jpg' ,'./img/CHEVROLET.jpg','./img/TOYOTA.jpg'];

//const imgElement = document.querySelector('#mainPhoto');
let index = 0;

function change() {
   carouselImage.src = images[index];
    index = (index + 1) % images.length;
 }
 
window.onload = function () {
    setInterval(change, 2000);
};



let images = ['./img/back-img.jpg', './img/CHEVROLET.jpg', './img/TOYOTA.jpg'];
let carouselImage = document.querySelector("#mainPhoto");
let currentIndex = 0;
function changeImage(index) {

   currentIndex += index;
   if (currentIndex < 0) {
       currentIndex = images.length - 1;
   } else if (currentIndex >= images.length) {
       currentIndex = 0;
   }
   carouselImage.src = images[currentIndex];
}
document.querySelector('.btn-grad:first-of-type').addEventListener('click', () => changeImage(-1));
document.querySelector('.btn-grad:last-of-type').addEventListener('click', () => changeImage(1));