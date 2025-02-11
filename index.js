const italic = document.querySelector("i");
// let word = "BharatCart";
// let characterIndex = 0;
// let reverseType = false;

// const intervalId = setInterval(() => {
//   if (!reverseType) {
//     italic.textContent = word.substring(0, characterIndex++);
//     if (characterIndex === word.length) reverseType = true;
//   } else {
//     italic.textContent = word.substring(0, characterIndex--);

//     if (characterIndex === 0) reverseType = false;
//   }
// }, 250);


document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  fetchComparisonTable();
});

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


// Fetch and display products in the comparison table
async function fetchComparisonTable() {
  try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      const products = await response.json();
      
      const tableBody = document.querySelector(".comparison-table tbody");
      tableBody.innerHTML = ''; // Clear existing table content

      products.forEach(product => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${product.title}</td>
              <td>$${product.price}</td>
              <td>${product.description.slice(0, 50)}...</td>
              <td>N/A</td>
              <td>${Math.random().toFixed(2)} kg</td> <!-- Fake weight -->
          `;
          tableBody.appendChild(row);
      });
  } catch (error) {
      console.error('Error fetching comparison table data:', error);
  }
}
