
console.log(
    "=====================================  Function Declaration==============================="
  );
  
  function greet() {
    console.log("Hello, World!");
  }
  
  greet();
  
  console.log(
    "=====================================  Function Expression Declaration==============================="
  );
  
  const greet1 = function () {
    console.log("Hello, World!");
  };
  
  greet1(); // Output: Hello, World!
  
  console.log(
    "===================================== Arrow Functions ==============================="
  );
  
  const greet2 = () => {
    console.log("Hello, World!");
  };
  
  greet2(); // Output: Hello, World!
  
  console.log(
    "=====================================Parameters and Arguments==============================="
  );
  
  function add(a, b) {
    return a + b;
  }
  
  let sum = add(5, 3); // sum = 8
  console.log("sum: ", sum);
  
  console.log(
    "=====================================Return Statement  ==============================="
  );
  
  function multiply(a, b) {
    return a * b;
  }
  
  let product = multiply(4, 5); // product = 20
  console.log("product: ", product);
  