const cartContainer = document.querySelector(".cart-items-container");

// Sample data for products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Headphones",
    price: 150.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/premium-photo/classic-black-wireless-headphones-pink-minimal-background_120523-1920.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Mouse",
    price: 25.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/free-photo/computer-mouse-near-laptop-neon-lighting-closeup_169016-26822.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Airpods",
    price: 120.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039319.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Cable",
    price: 10.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/premium-photo/group-colored-electrical-cables-studio-shot_341862-1566.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Keyboard",
    price: 50.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/free-photo/conceptual-research-man-hitting-enter-key-with-keyboard-wooden-cubes-black-desk-background-flat-lay-horizontal-image_176474-6276.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 7,
    name: "Mousepad",
    price: 10.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/free-photo/working-place-wooden-table_93675-131552.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
  {
    id: 8,
    name: "Mobile Phone",
    price: 50.0,
    quantity: 0, // Initialize with 0
    image:
      "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437112.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
  },
];

let total = 0;

// Function to update the total price
function updateTotalPrice() {
  const totalElement = document.querySelector(".cart-total");
  total = 0;

  // Loop through the cart items and sum the total
  document.querySelectorAll(".cart-item").forEach((cartItem) => {
    const price = parseFloat(
      cartItem.querySelector(".price").innerText.replace("$", "")
    );
    const quantity = parseInt(
      cartItem.querySelector(".updated-quantity").innerText
    );
    total += price * quantity;
  });

  // Update the total price display with the word "Total" followed by the price
  totalElement.innerText = `Total : $${total.toFixed(2)}`;
}

// Loop through products and add them to the cart
products.forEach((product) => {
  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cart-item");

  cartDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="cart-item-details">
      <h3 class="product-name">${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
    </div>
    <div class="cart-item-actions">
      <p class="quantity">
        <span class="minus">-</span> 
        <span class="updated-quantity">${
          product.quantity
        }</span> <!-- Initialized to 0 -->
        <span class="plus">+</span>
      </p>
      <button class="remove-item">Remove</button>
    </div>
  `;

  // Select elements inside the current cartDiv
  const minus = cartDiv.querySelector(".minus");
  const plus = cartDiv.querySelector(".plus");
  const updatedQuantity = cartDiv.querySelector(".updated-quantity");

  // Update quantity when the plus button is clicked
  plus.addEventListener("click", () => {
    updatedQuantity.innerText = parseInt(updatedQuantity.innerText) + 1;
    updateTotalPrice();
  });

  // Update quantity when the minus button is clicked
  minus.addEventListener("click", () => {
    updatedQuantity.innerText = Math.max(
      parseInt(updatedQuantity.innerText) - 1,
      0
    ); // Prevent 0 quantity
    updateTotalPrice();
  });

  // Add remove functionality
  const removeButton = cartDiv.querySelector(".remove-item");
  removeButton.addEventListener("click", () => {
    const confirmation = confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (confirmation) {
      cartDiv.remove();
      updateTotalPrice();
    }
  });

  cartContainer.appendChild(cartDiv);

  // Initial price update for each product
  updateTotalPrice();
});

// Function to handle checkout
const checkoutButton = document.querySelector("#checkout-button");
const purchasedSuccesful = new Audio("/audio/success-221935.mp3");

checkoutButton.addEventListener("click", () => {
  let quantitySelected = false; // Flag to check if any item has a quantity selected

  // Loop through all cart items to check if any quantity is selected
  document.querySelectorAll(".cart-item").forEach((cartItem) => {
    const updatedQuantity = cartItem.querySelector(".updated-quantity");

    if (parseInt(updatedQuantity.innerText) > 0) {
      quantitySelected = true; // If any item has a quantity greater than 0, set the flag
    }
  });

  if (!quantitySelected) {
    // Show an alert if no quantity is selected for any item
    alert("Please select a quantity to proceed.");
    return; // Exit the function if no quantity is selected
  }

  const confirmation = confirm("Are you sure you want to checkout?");

  if (confirmation === true) {
    // Reset all quantities to 0
    checkoutProcessing();

    setTimeout(() => {
      orderProcessed();
      purchasedSuccesful.play();
    }, 2000);

    setTimeout(() => {
      
      orderProcessed();
      alert(`Purchase of $${total.toFixed(2)} was successful`);

      // Reset all quantities to 0
      document
        .querySelectorAll(".updated-quantity")
        .forEach((quantityElement) => {
          quantityElement.innerText = 0;
        });

      // Reset the total to 0
      updateTotalPrice();

      // Reset the button text back to the original state
      checkoutButton.textContent = "Checkout";
      checkoutButton.style.backgroundColor = "";
    }, 2000);
  } else if (confirmation === false) {
    alert("Purchase is Unsuccessful");
    document
      .querySelectorAll(".updated-quantity")
      .forEach((quantityElement) => {
        quantityElement.innerText = 0;
      });

    // Reset the total to 0
    updateTotalPrice();
  }
});

function checkoutProcessing() {
  checkoutButton.textContent = "Processing....";
}

function orderProcessed() {
  checkoutButton.style.backgroundColor = "green";
  checkoutButton.textContent = "Processed";
}
