const header = document.querySelector(".heading-page");
const productContainer = document.querySelector(".product-container");

const electronics = [
  {
    image:
      "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074308.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Wireless Bluetooth Headphones",
    description:
      "High-quality noise-canceling headphones with 40-hour battery life and superior sound clarity.",
    price: "$120",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>', // Added wishlist icon
  },
  {
    image:
      "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "4K Smart LED TV",
    description:
      "55-inch 4K UHD Smart LED TV with HDR10 support and built-in streaming apps.",
    price: "$499",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/premium-photo/laptop-with-gaming-headset-screen_853645-16366.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Gaming Laptop",
    description:
      "High-performance gaming laptop with a powerful GPU, 16GB RAM, and 512GB SSD.",
    price: "$1500",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Smartphone",
    description:
      "Latest model smartphone with a stunning AMOLED display, 128GB storage, and 5G support.",
    price: "$899",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/free-photo/high-angle-athletic-woman-fixing-her-smartwatch_23-2148781792.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Smartwatch",
    description:
      "Feature-rich smartwatch with fitness tracking, GPS, and heart rate monitoring.",
    price: "$199",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/free-photo/wireless-speakers-black-red_140725-7485.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass, waterproof design, and 12-hour battery life.",
    price: "$89",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062860.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with adjustable DPI and long-lasting battery.",
    price: "$25",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/free-photo/top-view-hand-holding-key_23-2149680275.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Mechanical Keyboard",
    description:
      "RGB mechanical keyboard with customizable keys and tactile switches.",
    price: "$75",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/premium-photo/small-camera-wooden-table_218381-8133.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Action Camera",
    description:
      "Compact 4K action camera with image stabilization and waterproof casing.",
    price: "$299",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/premium-photo/waterproof-wireless-earbuds_1376535-38069.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Noise-Canceling Earbuds",
    description:
      "True wireless earbuds with active noise cancellation and 24-hour battery life.",
    price: "$150",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/free-photo/phone-mobile-connect-battery-power-bank_93675-128466.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Portable Power Bank",
    description:
      "10000mAh power bank with fast charging and dual USB ports for charging multiple devices.",
    price: "$50",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
  {
    image:
      "https://img.freepik.com/premium-photo/white-wireless-wi-fi-router-near-laptop-glass-table_98862-866.jpg?ga=GA1.1.622503843.1737465782&semt=ais_hybrid",
    name: "Wi-Fi Router",
    description:
      "Dual-band Wi-Fi router with high-speed connectivity, suitable for streaming and gaming.",
    price: "$80",
    wishlistIcon: '<i class="fa-regular fa-heart"></i>',
  },
];

electronics.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.classList.add("product-image");

  const wishlistIcon = document.createElement("div");
  wishlistIcon.innerHTML = product.wishlistIcon;
  wishlistIcon.classList.add("wishlist-icon");

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.classList.add("add-to-cart");

  productInfo.appendChild(productName);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(addToCartButton);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);
  productCard.appendChild(wishlistIcon);

  productContainer.appendChild(productCard);

  wishlistIcon.addEventListener("click", function () {
    if (wishlistIcon.style.color === "red") {
      setTimeout(() => {
        alert("Remove From Whislist");
        wishlistIcon.style.color = "";
      }, 400);

      wishlistIcon.style.color = "";
    } else {
      wishlistIcon.style.color = "red";
      setTimeout(() => {
        alert("Added To Whislist");
      }, 400);
    }
    console.log(wishlistIcon.style.color);
  });
});
