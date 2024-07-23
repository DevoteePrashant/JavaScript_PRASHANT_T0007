const productDiv = document.querySelector("#product");
const CategoryListDiv = document.querySelector("#CategoryList");
const filterInput = document.querySelector("#filter");


let allcat = [];
async function displayProduct(_allcheckcat = []) {
  productDiv.innerHTML = "";
  const product = await fetch('https://fakestoreapi.com/products');
  const finalProduct = await product.json();
  finalProduct.forEach(element => {
    if (!allcat.includes(element.category)) {
      CategoryListDiv.innerHTML += `
<label >
<input type="checkbox" onclick="categoryFilet()" value="${element.category}" >${element.category}</label>`
      allcat.push(element.category)
    }

  

    if (_allcheckcat.length == 0) {
      _allcheckcat = allcat;
    }


    if (_allcheckcat.includes(element.category)) {
      productDiv.innerHTML += `<div class="product-grid" >
      <div class="productItems">
        <img src="${element.image}" class="box_img"  title="${element.title}" alt="${element.title}">
          <div class="product_tile">
        <span class="productrating">${element.category} <span class="productrating flout"> ${element.rating.rate} <img src="https://img.icons8.com/?size=25&amp;id=19417&amp;format=png&amp;color=000000" alt=""> </span> </span> 
        <p class="discountedprice">$ ${element.price} </p>
        <h3 class="productrating">${element.title}</h3>
        </div>
  <div class="btn_show"><button type="button" class="atc-btn"><img src="https://img.icons8.com/?size=100&amp;id=9720&amp;format=png&amp;color=ffffff"   alt="">Add to cred</button>
  <button class="wl-btn" onclick="handleAddtoWishlist('JBL Quantum', 'HP67358')">
  <img src="https://img.icons8.com/?size=100&amp;id=19411&amp;format=png&amp;color=000000" alt="">
</button>
  </div>
  </div>
</div>
      </div>
    `;
    }
  });
}

displayProduct();

let categoryFilet = () => {
  let check_input = document.querySelectorAll('input[type="checkbox"]');
  let checkData = [];
  check_input.forEach((e) => {
    if (e.checked) {
      checkData.push(e.value)
    }
  })
  displayProduct(checkData)
}




const filterPrice = () => {
  const price = parseInt(filterInput.value);

  if (isNaN(price)) {
    alert("Enter a valid price");
    return;
  }

  const categories = getSelectedCategories();

  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
      const filteredProducts = products.filter(product => 
        product.price <= price && 
        (categories.length === 0 || categories.includes(product.category))
      );
      renderProducts(filteredProducts, categories);
    })
    .catch(error => console.error('Error fetching products:', error));
}
const getSelectedCategories = () => {
  const check_input = document.querySelectorAll('input[type="checkbox"]');
  const categories = [];
  check_input.forEach((e) => {
    if (e.checked) {
      categories.push(e.value)
    }
  })
  return categories;
}

function renderProducts(products, categories = []) {
  let productHTML = "";
  products.forEach(product => {
    if (categories.length === 0 || categories.includes(product.category)) {
      productHTML += `
          <div class="product-grid" >
              <div class="productItems">
                  <img src="${product.image}" class="box_img"  title="${product.title}" alt="${product.title}">
                  <div class="product_tile">
                      <span class="productrating">${product.category} <span class="productrating flout"> ${product.rating.rate} <img src="https://img.icons8.com/?size=25&amp;id=19417&amp;format=png&amp;color=000000" alt=""> </span> </span> 
                      <p class="discountedprice">$ ${product.price} </p>
                      <h3 class="productrating">${product.title}</h3>
                  </div>
                  <div class="btn_show">
                      <button type="button" class="atc-btn">
                         <img src="https://img.icons8.com/?size=100&amp;id=9720&amp;format=png&amp;color=ffffff" alt="">Add to cred
                      </button>
                      <button class="wl-btn" onclick="handleAddtoWishlist('JBL Quantum', 'HP67358')">
                          <img src="https://img.icons8.com/?size=100&amp;id=19411&amp;format=png&amp;color=000000" alt="">
                      </button>
                  </div>
              </div>
          </div>
      `;
    }
  });
  productDiv.innerHTML = productHTML;
}
