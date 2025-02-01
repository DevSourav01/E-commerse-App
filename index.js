const italic = document.querySelector("i");
let word = "BharatCart";
let characterIndex = 0;
let reverseType = false;

const intervalId = setInterval(() => {
  if (!reverseType) {
    italic.textContent = word.substring(0, characterIndex++);
    if (characterIndex === word.length) reverseType = true;
  } else {
    italic.textContent = word.substring(0, characterIndex--);

    if (characterIndex === 0) reverseType = false;
  }
}, 250);


document.addEventListener("DOMContentLoaded", fetchProducts);

async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=12&skip=12');
        const products = await response.json();

        const container = document.getElementById('product-container');
        container.innerHTML = ''; // Clear existing content

        products.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}">
                <p><strong>${product.title}</strong></p>
                <p>$${product.price}</p>
            `;
            container.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
