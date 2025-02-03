const header = document.querySelector(".heading-page");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productContainer = document.querySelector(".product-container");
const shortedProduct=document.querySelector(".shorted-product")

let allProducts = []; // Store all fetched products

document.addEventListener("DOMContentLoaded", fetchProducts);

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=21&skip=29"
    );
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

    productCard.innerHTML = `
      <img src="${product.images[0]}" alt="${
      product.title
    }" class="product-image">
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>$${product.price.toFixed(2)}</p>
        <div class="input-cart-container">
          <input type="number" value="1" min="1" class="quantity-input">
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    `;

    productContainer.appendChild(productCard);

   
    shortedProduct.textContent = `Showing ${products.length} of ${allProducts.length} products`;
  });
}





// Function to filter products by search & price range
function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedPriceRange = categoryFilter.value;

  let minPrice = 2,
    maxPrice = 100;

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
    const matchesSearch =
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);
    const matchesPriceRange =
      product.price >= minPrice && product.price <= maxPrice;
    return matchesSearch && matchesPriceRange;
  });
   // Update product count display
  shortedProduct.textContent = `Showing ${filteredProducts.length} of ${allProducts.length} products`;

  displayProducts(filteredProducts);
}

// Event Listeners for search and dropdown
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
