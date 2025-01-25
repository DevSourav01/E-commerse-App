const cartContainer = document.querySelector(".cart-items-container");

// Sample data for products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200.0,
    quantity: 1,
    image: "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Headphones",
    price: 150.0,
    quantity: 1,
    image: "https://img.freepik.com/premium-photo/classic-black-wireless-headphones-pink-minimal-background_120523-1920.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Mouse",
    price: 25.0,
    quantity: 1,
    image: "https://img.freepik.com/free-photo/computer-mouse-near-laptop-neon-lighting-closeup_169016-26822.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Airpods",
    price: 120.0,
    quantity: 1,
    image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039319.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Cable",
    price: 10.0,
    quantity: 1,
    image: "https://img.freepik.com/premium-photo/group-colored-electrical-cables-studio-shot_341862-1566.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Keyboard",
    price: 50.0,
    quantity: 1,
    image: "https://img.freepik.com/free-photo/conceptual-research-man-hitting-enter-key-with-keyboard-wooden-cubes-black-desk-background-flat-lay-horizontal-image_176474-6276.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 7,
    name: "Mousepad",
    price: 10.0,
    quantity: 1,
    image: "https://img.freepik.com/free-photo/working-place-wooden-table_93675-131552.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 8,
    name: "Mobile Phone",
    price: 50.0,
    quantity: 1,
    image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437112.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
];

// Loop through products and add them to the cart
products.forEach((product) => {
  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cart-item");

  cartDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="cart-item-details">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
    </div>
    <div class="cart-item-actions">
      <input type="number" class="quantity" value="${product.quantity}" min="1">
      <button class="remove-item">Remove</button>
    </div>
  `;
 

  // Add remove functionality
  const removeButton = cartDiv.querySelector(".remove-item");
  removeButton.addEventListener("click", () => {
    cartDiv.remove();
  });

  cartContainer.appendChild(cartDiv);
});
