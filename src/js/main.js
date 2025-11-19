// import { loadHeaderFooter } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";

// loadHeaderFooter();

// const dataSource = new ProductData("tents");
// const element = document.querySelector(".product-list");
// const productList = new ProductList("Tents", dataSource, element);

// productList.init();
// import { loadHeaderFooter } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";

// loadHeaderFooter();

// const dataSource = new ProductData("tents");
// const productListElement = document.querySelector(".product-list");

// const productList = new ProductList("Tents", dataSource, productListElement);
// productList.init();
// src/js/index.js
import { qs, loadHeaderFooter, renderListWithTemplate } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const listElement = qs(".product-list");
const productList = new ProductList("Tents", dataSource, listElement);

productList.init();
