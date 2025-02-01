const header = document.querySelector(".heading-page");

document.addEventListener("DOMContentLoaded", fetchProducts);

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=18&skip=29");
    const data = await response.json(); 

    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = ""; 

    // Loop through the products and display them
    data.products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productImage = document.createElement("img");
      productImage.src = product.images[0]; 
      productImage.alt = product.title; 
      productImage.classList.add("product-image");

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productName = document.createElement("h3");
      productName.textContent = product.title;

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;

      const productPrice = document.createElement("p");
      productPrice.textContent = "$" + product.price.toFixed(2);

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.classList.add("add-to-cart");

      // Append all elements to the product card
      productInfo.appendChild(productName);
      productInfo.appendChild(productDescription);
      productInfo.appendChild(productPrice);
      productInfo.appendChild(addToCartButton);

      productCard.appendChild(productImage);
      productCard.appendChild(productInfo);

      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
