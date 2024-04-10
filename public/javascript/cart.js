// let cartItems = [];

// function addToCart(product) {
//   cartItems.push(product);
//   updateCartCount();
//   displayCartItems();
// }

// function displayCartItems() {
//   const cartItemsContainer = document.getElementById("cart-items");
//   cartItemsContainer.innerHTML = "";

//   cartItems.forEach((item) => {
//     const cartItemDiv = document.createElement("div");
//     cartItemDiv.classList.add("cart-item");

//     const cartItemImage = document.createElement("img");
//     cartItemImage.src = item.image;
//     cartItemImage.alt = item.name;
//     cartItemDiv.appendChild(cartItemImage);

//     const cartItemDetails = document.createElement("div");
//     cartItemDetails.classList.add("cart-item-details");

//     const cartItemName = document.createElement("h3");
//     cartItemName.textContent = item.name;
//     cartItemDetails.appendChild(cartItemName);

//     const cartItemPrice = document.createElement("p");
//     cartItemPrice.textContent = "Price: ₹ " + item.price;
//     cartItemDetails.appendChild(cartItemPrice);

//     const cartItemRemove = document.createElement("button");
//     cartItemRemove.textContent = "Remove";
//     cartItemRemove.addEventListener("click", () => {
//       removeFromCart(item.id);
//     });
//     cartItemDetails.appendChild(cartItemRemove);

//     cartItemDiv.appendChild(cartItemDetails);
//     cartItemsContainer.appendChild(cartItemDiv);
//   });

//   updateTotalPrice();
// }

// function removeFromCart(productId) {
//   cartItems = cartItems.filter((item) => item.id !== productId);
//   displayCartItems();
// }

// function updateTotalPrice() {
//   const totalPriceElement = document.getElementById("total-price");
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
//   totalPriceElement.textContent = "₹ " + totalPrice;
// }

// function updateCartCount() {
//   const cartCountElement = document.getElementById("cartCount");
//   cartCountElement.textContent = cartItems.length;
// }

// displayCartItems();