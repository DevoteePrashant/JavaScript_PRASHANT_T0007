let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#fEEFEE";
ctx.fillRect(0, 0, 150, 75);






const c = document.getElementById("myCanvas2");
const ctx2 = c.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(20, 20);
ctx2.lineTo(20, 100);
ctx2.lineTo(70, 100);
ctx2.strokeStyle = "red";
ctx2.stroke();


const canvas3 = document.getElementById("myCanvas3");
const ctx4 = canvas3.getContext("2d");

ctx4.shadowBlur = 20;
ctx4.shadowColor = "black";
ctx4.fillStyle = "red";
ctx4.fillRect(20, 20, 100, 80);