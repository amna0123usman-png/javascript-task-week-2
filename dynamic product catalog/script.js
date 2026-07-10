const products = [

{
id:1,
name:"Laptop",
price:1200,
category:"Electronics",
image:"https://picsum.photos/200?1"
},

{
id:2,
name:"Smartphone",
price:700,
category:"Electronics",
image:"https://picsum.photos/200?2"
},

{
id:3,
name:"T-Shirt",
price:25,
category:"Clothing",
image:"https://picsum.photos/200?3"
},

{
id:4,
name:"Jeans",
price:60,
category:"Clothing",
image:"https://picsum.photos/200?4"
},

{
id:5,
name:"JavaScript Book",
price:40,
category:"Books",
image:"https://picsum.photos/200?5"
},

{
id:6,
name:"Python Book",
price:50,
category:"Books",
image:"https://picsum.photos/200?6"
}

];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="category">${product.category}</p>

<p class="price">$${product.price}</p>

<button>Buy Now</button>

`;

productContainer.appendChild(card);

});

}

function filterProducts(){

let filtered=[...products];

const search=searchInput.value.toLowerCase();

filtered=filtered.filter(product=>

product.name.toLowerCase().includes(search)

);

const category=categorySelect.value;

if(category!=="All"){

filtered=filtered.filter(product=>

product.category===category

);

}

const sort=sortSelect.value;

if(sort==="low"){

filtered.sort((a,b)=>a.price-b.price);

}

if(sort==="high"){

filtered.sort((a,b)=>b.price-a.price);

}

displayProducts(filtered);

}

searchInput.addEventListener("input",filterProducts);

categorySelect.addEventListener("change",filterProducts);

sortSelect.addEventListener("change",filterProducts);

displayProducts(products);