// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }

// export default class ProductData {
//   constructor(category) {
//     this.category = category;
//     this.path = `../public/json/${this.category}.json`;
//   }
//   getData() {
//     return fetch(this.path)
//       .then(convertToJson)
//       .then((data) => data);
//   }
//   async findProductById(id) {
//     const products = await this.getData();
//     return products.find((item) => item.Id === id);
//   }
// }

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `/sleep-team11/json/${this.category}.json`; // Adjust to your Vite base
  }

  async getData() {
    const res = await fetch(this.path);
    if (!res.ok) throw new Error("Failed to fetch product data");
    return await res.json();
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
