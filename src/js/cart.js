// import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

// loadHeaderFooter();

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//   return newItem;
// }

// renderCartContents();

// src/cart/cart.js
import { qs, getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

// Render the cart items
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const parent = qs(".product-list");
  if (!parent) return;

  if (cartItems.length === 0) {
    parent.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const html = cartItems.map(cartItemTemplate).join("");
  parent.innerHTML = html;
}

// Template for each cart item
function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="../product_pages/?product=${item.Id}" class="cart-card__image">
        <img src="${fixImagePath(item.Image)}" alt="${item.Name}" />
      </a>
      <a href="../product_pages/?product=${item.Id}">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors?.[0]?.ColorName || "N/A"}</p>
      <p class="cart-card__quantity">Qty: ${item.quantity || 1}</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>
  `;
}

// Fix image paths for Vite & GitHub Pages
function fixImagePath(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return "." + path;
  return "./" + path;
}

// Initialize cart rendering
renderCartContents();
