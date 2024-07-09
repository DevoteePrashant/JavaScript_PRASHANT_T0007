const quoteContent = document.querySelector(".quote-container .quote-content");
const quoteAuthor = document.querySelector(".quote-container .quote-author");
const newQuoteButton = document.querySelector(  ".quote-container .new-quote-btn");

const updateQuote = (data) => {
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
};

// const nextQuote = () => {
   
//   fetch("https://api.quotable.io/random?maxLength=100")
//     .then((response) => response.json())
//     .then((data) => {
//       updateQuote(data);
//     }).catch((error) =>{
//         console.error("error show in Api",error);
//         });
// };

// nextQuote();


// async/await
const nextQuote = async () => {
   
   try{const data = await  fetch("https://api.quotable.io/random?maxLength=100")
     const quote = await data.json()
          updateQuote(quote);
 } catch(error){
          console.error("error show in Api",error);
          };
  };
  
  nextQuote();


newQuoteButton.addEventListener("click", nextQuote);