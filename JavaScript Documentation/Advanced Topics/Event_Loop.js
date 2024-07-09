
console.log("=========================================Event Loop============================ ");

console.log("The event loop is what allows JavaScript to perform non-blocking operations, despite being single-threaded and with asynchronous" );


console.log("First one to start");

setTimeout(() => {
    console.log(" asynchronous  I should wait for 3 seconds before execution");
}, 3000);

setTimeout(() => {
    console.log(" asynchronous  I should wait for 0 seconds before execution");
}, 0);

console.log("It's time for me to end");


// console.log(" chromous  =>  chromous " );

// console.log(" First one to start");

// setTimeout(() => {
//     console.log("chromous => I should wait for 3 seconds before execution");
// }, 0);

// setTimeout(() => {
//     console.log("chromous => I should wait for 0 seconds before execution");
// }, 0);

// console.log(" chromous  =>  It's time for me to end");

