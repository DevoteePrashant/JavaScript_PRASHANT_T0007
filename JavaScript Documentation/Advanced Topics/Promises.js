console.log("========================================= Promises============================ ");
  
  var a =10
  let promise = new Promise((resolve, reject) => {
      if ( a  == 10) {
          resolve("Promises: Success");
        } else {
            reject("Promises:Promises: Error");
        }
    });
    
    promise.then( (value) =>{
        console.log(value);
    }).catch( (error) =>{
        console.log(error);
    })


let promise2 = new Promise((resolve, reject) => {
    if ( a  == 10) {
        resolve("Promises:Success");
    } else {
        reject("Promises:Error");
    }
});


promise2.then(function (value) {
    console.log(myDisplayer(value));
}, function(error){
    console.log(myDisplayer(error));
})
function myDisplayer(data2) {
console.log(data2);
  }

  
  let promise3 = new Promise((resolve, reject) => {
      if ( a  == 10) {
          resolve("Promises: Success");
        } else {
            reject("Promises: Error");
        }
    });
    
    
    promise3.then(function (value) {
        console.log(value);
    }, function(error){
        console.log(error);
    })