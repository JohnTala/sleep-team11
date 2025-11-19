import{a as r,l as a,b as e}from"./utils-DrwJu9Pc.js";import{P as c}from"./ProductData-D6Sl5V2y.js";class i{constructor(t,o){this.productID=t,this.dataSource=o,this.container=document.querySelector(".product-details")}async init(){const t=await this.dataSource.findProductById(this.productID);if(!t){this.container.innerHTML="<p>Product not found</p>";return}const o=`
      <h1>${t.Name}</h1>
      <img src="${t.Image}" alt="${t.Name}">
      <p>${t.Description}</p>
      <p>Price: $${t.FinalPrice}</p>
      <p>Color: ${t.Colors[0].ColorName}</p>
    `;r(o,this.container,t)}}a();const n=new c("tents"),s=e("product"),d=new i(s,n);d.init();
