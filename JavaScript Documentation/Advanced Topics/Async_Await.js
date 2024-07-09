
    
    console.log("========================================= Async/Await============================ ");
    function callawait2() {
        setTimeout(() => {
            console.log('Asynchronous2' , "wating celling 2");
        }, 2000);
    }
    
    async function b(){
        const result1 = await callawait2()
        console.log(result1);
    }
    b()

    async function c(){
     let promise4 = new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('Asynchronous' , "wating celling 3");
        }, 2000);
    })
        const main = await promise4
        console.log(main);
    }
    c()