


const data =document.getElementById("getall")
function count() {
getall = data.value
   setInterval( second2 , 1000)
}


function second2(){
const second1 =document.getElementById("second1")
    
    if(getall <= 0){
        second1.innerHTML =  "value is not found"  
        data.value = " "
    }else{
        second1.innerHTML = getall
        getall--
        console.log(getall);
    }
}