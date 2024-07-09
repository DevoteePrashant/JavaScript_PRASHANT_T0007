  
    
    console.log("=========================================Callbacks============================ ");


    function myDisplayer(data2) {
        console.log(data2);
       }
       
       function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
       }
       
    myCalculator(5, 5, myDisplayer)

    
       