
let images = ['./img/back-img.jpg' ,'./img/CHEVROLET.jpg','./img/TOYOTA.jpg'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
    imgElement.src = images[index];
    index = (index + 1) % images.length;
 }
 
 function sum() {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
 }
 
 function mines() {
    index = (index - 1 + images.length) % images.length;
    imgElement.src = images[index];
 }

window.onload = function () {
    setInterval(change, 2000);
};



