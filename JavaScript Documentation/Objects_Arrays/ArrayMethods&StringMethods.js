// Array Methods : JavaScript array methods are used to perform different tasks on arrays.
  console.log("======================================================== Array method=========================================================");

let fruits = ["Apple", "Banana", "Cherry" ,"outer-fruits"];
let number = [4,16, 8 ,3 ,9 ];
const array1 = [
   [0, 1],
    [2, 3],
    [4, 5],
];
const array2 = [
  [  [0, 1]],
    [2, 3],
    [4, 5],
];
console.log("number: ", number);
console.log("fruits: ", fruits);
console.log("array1: ", array1);

fruits.map( (value) =>{
    console.log("map: ", value);
})

const data = fruits.filter( (value) =>
value.length > 5
)
console.log("filter: ", data);


const data2 = number.reduce( (cur ,due ) => cur + due,0)
console.log("reduce: ", data2);


const data3 = array1.reduceRight( (cur ,due)=> cur.concat(due),)
console.log("reduceRight: ", data3);

const data5 = number.fill(10 ,3 ,6)
console.log("fill: ", data5);

const  check = (n) =>{
 return n > 9
}  

const data4 = number.find( check )
console.log("find: ", data4);
 
const  check2 = (n) =>{
    return n  > 8
   } 

const findindex = number.findIndex(check2);
console.log("findindex", findindex);


const findindex3 = number.includes(6);
const findindex4 = fruits.includes("Cherry");
console.log("includes", findindex3);
console.log("includes", findindex4);

const pop = fruits.pop();
console.log("pop revs ", pop);
console.log(" get pop normal",  fruits.pop());


console.log("without push: ", number);
const push = number.push(777);
console.log("push", push);
console.log("push: ", number);

console.log("without shift: ", number);
const shift = number.shift();
console.log("shift", shift);
console.log("shift: ", number);

console.log("without unshift: ", number);
const unshift = number.unshift(0);
console.log("unshift", unshift);
console.log("unshift: ", number);

console.log("without splice: ", number);
const splice = number.splice(2 ,3);
console.log("splice", splice);
console.log("splice: ", number);

console.log("without slice: ", number);
const slice = number.slice(2 ,3);
console.log("slice", slice);
console.log("slice: ", number);

console.log("without join: ", number);
const join = number.join("-");
console.log("join", join);
console.log("join: ", number);

console.log("without reverse: ", number);
const reverse = number.reverse();
console.log("reverse", reverse);
console.log("reverse: ", number);

console.log("without sort: ", number);
const sort = number.sort();
console.log("sort", sort);
console.log("sort: ", number);

console.log("without some: ", number);
const some = number.some((num) => num ==777);
console.log("some", some);
console.log("some: ", number);

console.log("without every: ", number);
const every = number.every((num) => num > 2);
console.log("every", every);
console.log("every: ", number);


const from = Array.from("Prashant");
console.log("from", from);



const of = Array.of(123);
console.log("of", of);

const isArray = Array.isArray([123]);
console.log("isArray",isArray );


let index = 1 
const At = number.at(index);
console.log(number);
console.log("At",At );


console.log(number);
const copyWithin = number.copyWithin(1 ,2 ,3);
console.log("copyWithin",copyWithin );

console.log(array2);
const flat = array2.flat(2);
console.log("flat",flat );


var users = [{ 'user': 'barney', 'age': 36 },

    { 'user': 'fred', 'age': 40 }];
console.log(users);
var flatMap = users.flatMap( u => [u.user ,u.age] );
console.log("flatMap",flatMap );

const q =  [1,2,3] //? 3
console.log("[1,2,3].length;: ", q.length);
console.log("q: ", q);



let main = [1,2,3] //? [1,2,3,4] *
console.log("==push====",main.push(4));
console.log("main", main);



let main2 = [1,2,3] //? [0,1,2,3] *
console.log("[1,2,3].unshift(0): ", main2.unshift(0));
console.log("main2",main2);


let main3 = [1,2,3] //? [1,2] * 
console.log("[1,2,3].pop (): ", main3.pop ());
console.log( "main3",main3);



let main4 = [1,2,3] //? [2,3] *
console.log("[1,2,3].shift(): ", main4.shift());
console.log("main4: ", main4);



let main5 = [1,2,3] //? 3
console.log("[1,2,3].at (2): ", main5.at(2));
console.log("main5: ", main5);



let main6 = [1,2,3] //? true
console.log("[1,2,3].includes(3);: ", [1,2,3].includes(3));
console.log("main6: ", main6);



 let main7 = [1,2,3] //? [1, 4, 9]
 console.log("[1,2,3].map ((num) => Math. pow(num, 2));: ", main7.map ((num) => Math. pow(num, 2)));
 console.log("main7: ", main7);



let main8 = [1,2,3] //? [1,3]
console.log("[1,2,3].filter ((num) => num % 2): ", main8.filter ((num) => num % 2));
console.log("main8 : ", main8 );

 let main9 =[1,2,3] //? false
 console.log("[1,2,3].every ((num) => num > 1);: ", main9.every((num) => num > 1));
 console.log("main9: ", main9);



let main10 = [1,2,3] //? true
console.log("[1,2,3].some ( (num) => num == 3): ", main10.some ( (num) => num == 3));
console.log("main10: ", main10);



 let main11 =[1,2,3]; //? [10,10,10]
console.log("[1,2,3].fill (10): ", main11.fill(10));
console.log("main11: ", main11);


let main12 = [1,2,3]; //? 6
console.log("[1,2,3].reduce((acc, num) => acc + num, 0): ", main12.reduce((acc, num) => acc + num, 0));
console.log("main12: ", main12);

let main13 =[1,2,3]; //? [1,2,3,4,5]
console.log("[1,2,3].concat ([4,5]): ", main13.concat ([4,5]));
console.log("main13: ", main13);

let main14 = [1,2,3]; //? [3,2,1]
console.log("[1,2,3].reverse();: ", main14.reverse());
console.log("main14: ", main14);

let main15 = [2,1,3]; //? [1,2,3]
console.log("[2,1,3].sort(): ", main15.sort());
console.log("main15: ", main15);

let main16= [1,2,3]; //?1 1-2-3
console.log("[1,2,3].join('-'): ", main16.join('-'));
console.log("main16: ", main16);

let main17 = [1,2,[3]]; //? [1,2,3]
console.log("[1,2,3].flat(): ", main17.flat());
console.log("main17: ", main17);

 let main18 =[1,2,3]; //? 2
console.log("[1,2,3].find ((num, i) => i === 1): ", main18.find ((num, i) => i === 1));
console.log("main18: ", main18);

let main19= [1,2,3]; //? 1
console.log("[1,2,3].findIndex ( (num) => num=== 2): ", main19.findIndex ( (num) => num=== 2));
console.log("main19: ", main19);


let main20 = [1,2,3]; //? 1,2,3
console.log("[1,2,3].toString(): ", main20.toString());
console.log("main20: ", main20);

let main21 = [1,2,3]; //? [2,3]
console.log("[1,2,3].slice(1,3): ", main21.slice(1,3));
console.log("main21: ", main21);

let main22= [1,4]; //? [1,2,3,4] *
console.log("[1,2,3].splice(1, 0, 2, 3): ", main22.splice(1, 0, 2, 3));
console.log("main22: ", main22);

Array.isArray("[1,2,3]"); //? false
console.log(Array.isArray("[1,2,3]"));
Array.from("123"); //? ['1', '2', '3']
console.log(Array.from("123"));



console.log("======================================================== string method=========================================================");
// charAt
var txt = "Hello World";
console.log(txt.charAt(0))
//prints 'H'
// concat
var str1 = "Hello ";
var str2 = "codingtute!";
console. log(str1.concat(str2))
//prints "Hello codingtute!"
// indexof 
var txt = "Lets find where 'pen' occurs!";
console. log(txt.indexOf("pen"))
// prints 17
// lastindexof
var str = "A dev knows a dev";
var pos = str.lastIndexOf("dev");
//prints 14
// toUpperCase
var sentence = "CodingTute";
console. log(sentence.toUpperCase());
//prints "CODINGTUTE"
// valueOf
const s = new String('test');
typeof s; // 'object'
s.valueOf(); // 'test'
typeof s.valueOf(); // 'string'
// trim
var str = "                 Trim Both Side                 ";
console. log(str.trim())
//prints "Trim Both Side"
// toString
var num = 15;
console. log(num.toString())
//prints "15"

// replace
var str = "Hello Devl";
console.log(str.replace("Dev", "World"))
//prints "Hello World"
// search
var str = "hello dev!";
console. log(str.search("dev"))
//prints 6
// slice(start, end)
var str = "Developers world!";
console. log(str.slice(0, 10))
//prints "Developers"
// includes
var str = "My name is codingtute.";
console. log(str.includes ("name" ))
//prints true
// charCodeAt
var str = "TEST";
str .charCodeAt(0) // returns 84
// match
var str = "lopersum lopersum lopersum lopersum.";
console. log(str.match(/sum/g))
//prints ["sum", "sum", "sum", "sum"]
// split
var str = "1,2,3,4,5";
console. log(str.split(","))
//prints ("1", "2", "3", "4", "5"]
// toLowerCase
var sentence = "CodingTute";
console. log(sentence.toLowerCase());
//prints "codingtute"

// substr(start, length)
var d = "JavaScript";
console. log(d.substr(4, 6))
//prints "Script"
// substring(start, end)
var str = "Hello dev!";
console. log(str.substring(0, 5))
