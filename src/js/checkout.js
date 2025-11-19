// import { loadHeaderFooter } from "./utils.mjs";

// loadHeaderFooter();

// src/checkout/checkout.js
import { qs, getLocalStorage, loadHeaderFooter } from "../js/utils.mjs";

loadHeaderFooter();

function renderCheckout() {
  const cartItems = getLocalStorage("so-cart") || [];
  const parent = qs(".checkout-list");
  if (!parent) return;

  if (cartItems.length === 0) {
    parent.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const html = cartItems.map(item => `
    <li>
      ${item.Name} - Qty: ${item.quantity || 1} - $${item.FinalPrice}
    </li>
  `).join("");

  parent.innerHTML = html;
}

renderCheckout();
