
console.log("======================================================== Object  method=========================================================");

//   all so can object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    fullName: function() {
        return  "My Name is " + this.firstName + " " + this.lastName;
    }
};

data = Object.create(person)
console.log(data.fullName());
person.firstName = "Prashant"
console.log(person.firstName);

console.log("======================================================== Object.keys()  method=========================================================");

let person3 = { name: 'John', age: 30 };
let keys = Object.keys(person3);
console.log(keys); // ['name', 'age']

console.log("======================================================== Object.values()  method=========================================================");

let person1 = { name: 'John', age: 30 };
let values = Object.values(person1);
console.log(values); // ['John', 30]
console.log("======================================================== Object.entries()  method=========================================================");
let person2 = { name: 'John', age: 30 };
let entries = Object.entries(person2);
console.log(entries); // [['name', 'John'], ['age', 30]]

console.log("======================================================== Object.assign()  method=========================================================");


let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
let returnTarget = Object.assign(target, source);
console.log(returnTarget);
console.log("======================================================== Object delete method=========================================================");

let obj = { name: 'John' };
console.log(delete obj.name)
Object.freeze(obj);
obj.name = 'Jane'; // This will not change the value of name
console.log(obj.name); // 'John'

console.log("========================================================Object.freeze() method=========================================================");
let obj2 = { name: 'main' };
Object.freeze(obj2);
obj2.name = 'Jane'; // This will not change the value of name
console.log(obj2.name); 