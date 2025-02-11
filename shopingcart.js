let totalPrice = 0; // Declare totalPrice globally
const purchasedSuccesful = new Audio("/audio/success-221935.mp3");

document.addEventListener("DOMContentLoaded", loadCart);

let checkout = document.querySelector(".checkout");
let cartTotal = document.querySelector(".cart-total");

// Function to update quantity in the cart
function updateQuantity(event) {
  const productId = event.target.dataset.id; // Get the product ID
  const newQuantity = parseInt(event.target.value); // Get the new quantity from input

  // Ensure the quantity is valid (at least 1)
  if (newQuantity <= 0) {
    event.target.value = 1;
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = cart.find((item) => item.id == productId); // Find the product by ID

  if (product) {
    // Update the quantity of the product in the cart
    product.quantity = newQuantity;

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render the cart to reflect the updated quantity and total price
    loadCart();
  }
}

// Function to load and display the cart
function loadCart() {
  const cartContainer = document.querySelector(".cart-container");
  const cartCheckoutContainer = document.querySelector(
    ".cart-checkout-container"
  );
  cartContainer.innerHTML = ""; // Clear previous content

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML =
      '<div class="empty"><p>Your cart is empty</p></div>';

    cartCheckoutContainer.style.display = "none";

    return;
  }

  totalPrice = 0; // Reset total price to 0 before calculating

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("product-card");

    totalPrice += product.price * product.quantity; // Add product price * quantity to the total

    cartItem.innerHTML = `
      <img src="${product.images[0]}" alt="${
      product.title
    }" class="product-image">
      <div class="cart-info">
        <h3>${product.title}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Quantity: <input type="number" value="${
          product.quantity
        }" min="1" class="quantity-input" data-id="${product.id}"></p>
        <button class="remove-item" data-id="${product.id}">Remove</button>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });

  // Update the total price
  if (cartTotal) {
    cartCheckoutContainer.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;`;

    cartTotal.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }

  // Attach event listeners for remove buttons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", removeFromCart);
  });

  // Attach event listeners for quantity update
  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", updateQuantity); // Attach the event listener for quantity change
  });
}

// Checkout button event listener
checkout.addEventListener("click", () => {
  const confirmation = confirm("Are you sure you want to checkout?");
  if (confirmation) {
    checkout.innerHTML = "Processing...";
    localStorage.removeItem("cart");
    purchasedSuccesful.play();
    alert(`Purchase of $${totalPrice.toFixed(2)} was successful`);
    // Optionally, clear the cart or redirect
    localStorage.removeItem("cart"); // Clear the cart after checkout
    loadCart(); // Re-render the cart (empty now)
  } else {
    alert("Checkout canceled.");
  }
});

// Function to remove item from cart
function removeFromCart(event) {
  const productId = event.target.dataset.id;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((product) => product.id != productId);
  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart(); // Re-render the cart after removal
}
