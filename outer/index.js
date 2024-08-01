//  input
// get input
//  splice to do
// slice to delete 

// In index.js
window.onload = function() {

let Submit = document.getElementById('submit');
const database = [];

Submit.addEventListener('click', () => {
  let value = document.getElementById('get').value.trim();
  if (value !== "") {
    let storedData = localStorage.getItem('value');
    if (storedData === null || storedData === "") {
      storedData = '[]';
      localStorage.setItem('value', storedData);
    }

    let dataArray = JSON.parse(storedData);
    dataArray.push(value);
    localStorage.setItem('value', JSON.stringify(dataArray));

    let datasetHTML = '';
    for (let i = 0; i < dataArray.length; i++) {
      datasetHTML += "- " + dataArray[i] + "\n" + '    <button type="button" data-index="' + i + '" onclick="deleteData(event)">delete</button><br>';
    }
    document.getElementById("dataset").innerHTML = datasetHTML;
  } else {
    alert("emit");
  }
});

function deleteData(event) {
  console.log("dele");
  let storedData = localStorage.getItem('value');
  let dataArray = JSON.parse(storedData);
  let index = event.target.getAttribute('data-index');
  if (index !== null) {
    dataArray.splice(index, 1);
    localStorage.setItem('value', JSON.stringify(dataArray));
    let datasetHTML = '';
    for (let i = 0; i < dataArray.length; i++) {
      datasetHTML += "- " + dataArray[i] + "\n" + '    <button type="button" data-index="' + i + '" onclick="deleteData(event)">delete</button><br>';
    }
    document.getElementById("dataset").innerHTML = datasetHTML;
  }
}
}



const data = [{name:"Prashant",age:13},
    {name:"Rajes",age:13},
    {name:"mahita",age:19},
] 
// if age = 13 so give me

let data2 = data.filter((value) =>value.age ===  13 )
console.log('data2 :', data2);

data2.forEach((obj) => {
  console.log(obj.name);
});

console.log("================");
data.forEach((obj) => {
  console.log(obj.name);
});

// //    fibonacci
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;
// // let n1 = [0], n2 = [1], nextTerm;
// // console.log(' :',n1.concat(n2) );

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

let data55 = Math.floor(Math.random() * 100)+1
console.log(`Math.floor(Math.random * 3):`, data55)




let text = "The rain in SPAIN stays mainly data1 in the plain";
let text2 = "The rain in SPAIN2 stays mainly data in the plain";

const regex = /SPAIN|SPAIN2|data/g;
const myArr1 = text.match(regex);
const myArr2 = text2.match(regex);

const myArr = myArr1.concat(myArr2 ? myArr2 :[]);
document.getElementById("demo1").innerHTML = myArr.length + " " + myArr;

let email ="prashant2372004@gmail.com";
let Number4 ="+91 2342323423";

const regex2 = /([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+)/gm
const regex3 =  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm || /([\+0-9]+\s[0-9]+[0-9]+)/gm

const emailData = email.match(regex2)
const Number2 = Number4.match(regex3)

document.getElementById("demo2").innerHTML = emailData;
document.getElementById("demo3").innerHTML = Number2;




