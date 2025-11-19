import{r,l as i,q as c}from"./utils-DrwJu9Pc.js";import{P as o}from"./ProductData-D6Sl5V2y.js";function n(t){return`
    <li class="product-card">
      <a href="product_pages/?product=${t.Id}">
        <img src="${t.Image}" alt="${t.Name}">
        <h2>${t.Brand.Name}</h2>
        <h3>${t.Name}</h3>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>`}class l{constructor(a,s,e){this.category=a,this.dataSource=s,this.listElement=e}async init(){const a=await this.dataSource.getData();r(n,this.listElement,a)}}i();const d=new o("tents"),m=c(".product-list"),h=new l("Tents",d,m);h.init();
