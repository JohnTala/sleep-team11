// // wrapper for querySelector...returns matching element
// export function qs(selector, parent = document) {
//   return parent.querySelector(selector);
// }
// // or a more concise version if you are into that sort of thing:
// // export const qs = (selector, parent = document) => parent.querySelector(selector);

// // retrieve data from localstorage
// export function getLocalStorage(key) {
//   return JSON.parse(localStorage.getItem(key));
// }
// // save data to local storage
// export function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }
// // set a listener for both touchend and click
// export function setClick(selector, callback) {
//   qs(selector).addEventListener("touchend", (event) => {
//     event.preventDefault();
//     callback();
//   });
//   qs(selector).addEventListener("click", callback);
// }

// // get the product id from the query string
// export function getParam(param) {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const product = urlParams.get(param);
//   return product
// }

// export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
//   const htmlStrings = list.map(template);
//   // if clear is true we need to clear out the contents of the parent.
//   if (clear) {
//     parentElement.innerHTML = "";
//   }
//   parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
// }

// export function renderWithTemplate(template, parentElement, data=null, callback=null) {
//   parentElement.innerHTML = template;
//   if (callback) {
//     callback(data);
//   }
// }

// async function loadTemplate(path) {
//   const res = await fetch(path);
//   const template = await res.text();
//   return template;
// }

// export async function loadHeaderFooter() {
//   const headerTemplate = await loadTemplate("../partials/header.html");
//   const footerTemplate = await loadTemplate("../partials/footer.html");

//   const headerElement = document.querySelector("#main-header");
//   const footerElement = document.querySelector("#main-footer");

//   renderWithTemplate(headerTemplate, headerElement);
//   renderWithTemplate(footerTemplate, footerElement);
// }

// src/js/utils.mjs

// Wrapper for querySelector
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// LocalStorage helpers
export function getLocalStorage(key) {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item);
  } catch (e) {
    console.error("Error parsing localStorage item", key, e);
    return null;
  }
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Query string helper
export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Render a list with template
export function renderListWithTemplate(templateFn, parentElement, list = [], position = "afterbegin", clear = false) {
  if (!parentElement) return;
  if (clear) parentElement.innerHTML = "";
  const html = list.map(templateFn).join("");
  parentElement.insertAdjacentHTML(position, html);
}

// Render a single template
export function renderWithTemplate(template, parentElement, data = null, callback = null) {
  if (!parentElement) return;
  parentElement.innerHTML = template;
  if (callback) callback(data);
}

// Load HTML template from path
async function loadTemplate(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load template: ${path}`);
    return await res.text();
  } catch (e) {
    console.error(e);
    return "";
  }
}

// Load header and footer into the DOM
export async function loadHeaderFooter() {
  const headerPath = "../public/partials/header.html";
  const footerPath = "../public/partials/footer.html";

  const headerHTML = await loadTemplate(headerPath);
  const footerHTML = await loadTemplate(footerPath);

  const headerEl = qs("#main-header");
  const footerEl = qs("#main-footer");

  if (headerEl) headerEl.innerHTML = headerHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;
}
