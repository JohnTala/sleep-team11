import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();


// import { getParam, loadHeaderFooter } from "../js/utils.mjs";
// import ProductData from "../js/ProductData.mjs";
// import ProductDetails from "../js/ProductDetails.mjs";

// loadHeaderFooter();

// const productID = getParam("product");
// const dataSource = new ProductData("tents");

// const product = new ProductDetails(productID, dataSource);
// product.init();

// // src/product_pages/product.js
// import { qs, loadHeaderFooter, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// import ProductDetails from "./ProductDetails.mjs";
// import { addToCart } from "./addToCart.js";

// loadHeaderFooter();

// const productID = getParam("product");
// const dataSource = new ProductData("tents");
// const product = new ProductDetails(productID, dataSource);

// product.init();

// // Add to Cart button
// const addButton = qs("#add-to-cart");
// if (addButton) {
//   addButton.addEventListener("click", async () => {
//     const prod = await dataSource.findProductById(productID);
//     addToCart(prod, 1);
//     alert(`${prod.Name} added to cart!`);
//   });
// }
