let fetchRes  = fetch("https://jsonplaceholder.typicode.com/posts");
fetchRes.then(response => response.json())
.then(data =>{   

    console.log(data);
   let str = "" ;
data.forEach(item =>{
    str +=  `
            <div class="table-content">	
                <div class="table-row ">		
                <div class="table-data">${item.id}</div>
                    <div class="table-data" >${item.userId}</div>
                    <div class="table-data">${item.title}</div>
                    <div class="table-data">${item.body}</div>
                </div>
            </div>	
        </div>`
} );
        document.getElementById("demo2").innerHTML = str;
})

