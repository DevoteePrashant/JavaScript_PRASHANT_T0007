function storeData() {
    localStorage.setItem("name", "John Doe");
}

function retrieveData() {
    let name2 = localStorage.getItem("name");  
    document.getElementById("demo").innerHTML = name2
}


let arr = JSON.parse(localStorage.getItem('arr')) ||[];

const i = document.createElement('input');
document.body.appendChild(i);

const i1 = document.createElement('input');
document.body.appendChild(i1);

const b = document.createElement('button');
document.body.appendChild(b).innerText="btn stor data";

b.addEventListener('click', () => {
    const d = document.createElement('div');
    document.body.appendChild(d);
    const d1 = document.createElement('div');
    document.body.appendChild(d1);
    d.innerText = i.value;
    d1.innerText = i1.value;


    arr.push( {"name" : i.value } ,{"email" : i1.value});
    localStorage.setItem( "arr" ,JSON.stringify(arr));

});

