
console.log("======================================================== JSON.parse  method=========================================================");



let jsonString = '{"name":"John","age":30}';
// '{"name":"John","age":30}'    without string
let person = JSON.parse(jsonString);
console.log(person); // { name: 'John', age: 30 }


console.log("========================================================JSON.stringify()  method=========================================================");


let person1 = { name: 'John', age: 30 };
let jsonString1 = JSON.stringify(person1);
console.log(jsonString); // '{"name":"John","age":30}'
