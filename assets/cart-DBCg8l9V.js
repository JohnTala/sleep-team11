import{l as c,g as s,q as e}from"./utils-DrwJu9Pc.js";c();function n(){const r=s("so-cart")||[],a=e(".product-list");if(!a)return;if(r.length===0){a.innerHTML="<p>Your cart is empty.</p>";return}const t=r.map(o).join("");a.innerHTML=t}function o(r){var a,t;return`
    <li class="cart-card divider">
      <a href="../product_pages/?product=${r.Id}" class="cart-card__image">
        <img src="${i(r.Image)}" alt="${r.Name}" />
      </a>
      <a href="../product_pages/?product=${r.Id}">
        <h2 class="card__name">${r.Name}</h2>
      </a>
      <p class="cart-card__color">${((t=(a=r.Colors)==null?void 0:a[0])==null?void 0:t.ColorName)||"N/A"}</p>
      <p class="cart-card__quantity">Qty: ${r.quantity||1}</p>
      <p class="cart-card__price">$${r.FinalPrice}</p>
    </li>
  `}function i(r){return r?r.startsWith("http")?r:r.startsWith("/")?"."+r:"./"+r:""}n();
