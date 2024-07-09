console.log(document.getElementById("intro").innerHTML); // Outputs: Hello, DOM!
console.log(document.getElementById("intro").innerHTML ="Dom change"); // Outputs: Hello, DOM!


const changeText = () =>{
    let data = "Hello world";
    let element = document.getElementsByClassName('dom');
    if (element[0].innerHTML !== data) {
        element[0].innerHTML = " hello Dom";
    } else {
        element[0].innerHTML = " Hello , wold";
    }
}

function textcopy(){
    document.getElementById('demo').innerHTML = 'Hello, World!';
 };



 function what(){
     document.getElementById('hello').innerHTML = 'hi';
 };


 console.log("==============================DOM Events==============================");
 
 function displayDate() {
     document.getElementById("demo2").innerHTML = Date();
    }
    
    console.log("==============================Event Listeners==============================");
    document.getElementById('editbtn').addEventListener("click" ,function(){
        document.getElementById('demo3').innerHTML="text change to clicked "
    })
    
    console.log("==============================Forms and Input Handling==============================");
    function validateForm(){
        let name = document.getElementById('name')
        if(name.value == ""){
            document.getElementById('error').style.color = "red"
            document.getElementById('error').innerText ="Name must be filled out "
        }else{
            document.getElementById('error').style.color = "blue"
            document.getElementById('error').innerText =" Form submitted successfully!"
        }
    }
    document.body.style.background = `yellow`