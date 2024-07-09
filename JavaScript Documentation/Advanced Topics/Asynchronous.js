console.log("=========================================Asynchronous ============================ ");
 console.log(" Asynchronous JavaScript code execution is handled by an event loop, which executes each task in sequence and does not allow any blocking operations like I/O or long computations.");

function callawait() {
    setTimeout(() => {
        console.log('Asynchronous' , "wating celling");
    }, 2000);
}

async function a(){
    console.log("calling");
    const result1 = await callawait()
    console.log(result1);
}

  a()
