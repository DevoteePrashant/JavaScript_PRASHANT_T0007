console.log("========================Task 1 =======================================");

let a = "time";
let c = "time";
let b = "Time";
console.log("a == b? " + (a == b));
console.log("a == c? " + (a == c));

console.log("========================Task 2 =======================================");
let fest =  6
let secode = 4
function getdata(fest , secode ) {
    var  sum = fest * secode
    console.log("sum  =" + sum); 
}
getdata(fest , secode )
console.log("========================Task 3 =======================================");

console.log(true && false,false && true,false && false ,true && true);
console.log("========================Task 4 =======================================");


function getdata2( ) {
    let fest2 = prompt("Please enter your your value a")
    let secode2 = prompt("Please enter your your value b")
    var  sum = fest2 * secode2
    console.log("sum  =" + sum); 
}
getdata2( )

console.log("========================Task 5 =======================================");
function getdata3( ) {
    let fest3 = prompt("Please enter your  value  this = ")
    
    console.log("typeof  =" + typeof fest3); 
}
getdata3( )

console.log("========================Task 6 =======================================");
// confirm
// document.write
function data (){
    let a = prompt("Please enter your value ");
    let data = confirm(" your want to print value ")
if(data){
document.write(a)
}else{
    document.write(" please not allow me write")
}
}

data()
console.log("========================Task 7 =======================================");