
console.log(
    "=====================================  Scope   ==============================="
  );
  
  console.log(
      "=====================================  Global Scope  Statement==============================="
  );
  
  let pra = "I am a global variable";
  
  function s() {
   console.log(pra); // Output: I am a global variable
  }
  
  s();
  console.log(pra); // Output: I a global variable
  
  console.log(
    "=====================================  Local Scope  Statement==============================="
  );
  
  
  function greet() {
      let localVar = "I am a local variable";
      console.log(localVar); // Output: I am a local variable
     }
     
     greet();
  //    console.log(localVar); // Error: localVar is not defined
     
  console.log(
    "=====================================  Block Scope  Statement==============================="
  );
  
  
  function testBlockScope() {
      if (true) {
      let blockVar = "I am a block-scoped variable";
      console.log(blockVar); // Output: I am a block-scoped variable
      }
      // console.log(blockVar); // Error: blockVar is not defined
     }
     
     testBlockScope();
  
     console.log(
         "=====================================  Function Scope Statement==============================="
  );
  
  
  function testFunctionScope() {
      if (true) {
      var functionVar = "I am a function-scoped variable";
      }
      console.log(functionVar); // Output: I am a function-scoped variable
     }
     
     testFunctionScope();
  //    console.log(functionVar); // Error: functionVar is not defined
         
     console.log(
           "=====================================  Hoisting Scope Statement==============================="
         );
     
  
         x = 5; // Assign 5 to x
  
  console.log(x); // Output: 5
  
  var x; // Declare x
  