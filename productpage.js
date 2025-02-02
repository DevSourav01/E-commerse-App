const header = document.querySelector(".heading-page");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productContainer = document.querySelector(".product-container");

let allProducts = []; // Store all fetched products

document.addEventListener("DOMContentLoaded", fetchProducts);

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=18&skip=29");
    const data = await response.json();
    allProducts = data.products; // Store products globally
    displayProducts(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Function to display products
function displayProducts(products) {
  productContainer.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
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

    // Append all elements
    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(addToCartButton);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    productContainer.appendChild(productCard);
  });
}

// Function to filter products by search & price range
function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedPriceRange = categoryFilter.value;

  let minPrice = 2, maxPrice = 100; 

  if (selectedPriceRange === "$2-$20") {
    minPrice = 2;
    maxPrice = 20;
  } else if (selectedPriceRange === "$20-$30") {
    minPrice = 20;
    maxPrice = 30;
  } else if (selectedPriceRange === "$30-$60") {
    minPrice = 30;
    maxPrice = 60;
  }

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText);
    const matchesPriceRange = product.price >= minPrice && product.price <= maxPrice;
    return matchesSearch && matchesPriceRange;
  });

  displayProducts(filteredProducts);
}

// Event Listeners for search and dropdown
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
