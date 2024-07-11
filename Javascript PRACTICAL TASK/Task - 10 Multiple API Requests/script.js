let promise1 = fetch("https://jsonplaceholder.typicode.com/users");
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts");
let promise3 = fetch("https://jsonplaceholder.typicode.com/comments");

Promise.all([promise1, promise2, promise3]).then(async (responses) => {
  let [response1, response2, response3] = responses;

  
  if(response1.ok && response2.ok && response3.ok){
      console.log("api is working");
}else{
    console.log("error show in responds api");
  }

  let json1 = await response1.json();
  let json2 = await response2.json();
  let json3 = await response3.json();

  let tableHtml = `<table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>phone</th>
      <th>username</th>
      <th>website</th>
    </tr>`;

  json1.forEach((user) => {
    tableHtml += `<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.username}</td>
      <td>${user.website}</td>
    </tr>`;
  });

  tableHtml += `</table>`;

  let tableHtml2 = `<table>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>body</th>
    </tr>`;

  json2.forEach((post) => {
    tableHtml2 += `<tr>
      <td>${post.userId}</td>
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    </tr>`;
  });

  tableHtml2 += `</table>`;

  let tableHtml3 = `<table>
    <tr>
      <th>Post ID</th>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Body</th>
    </tr>`;

  json3.forEach((comment) => {
    tableHtml3 += `<tr>
      <td>${comment.postId}</td>
      <td>${comment.id}</td>
      <td>${comment.name}</td>
      <td>${comment.email}</td>
      <td>${comment.body}</td>
    </tr>`;
  });

  tableHtml3 += `</table>`;

  document.body.innerHTML = tableHtml + tableHtml2 + tableHtml3;
});