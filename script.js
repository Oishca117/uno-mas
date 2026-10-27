//reference variables

const coffeeBeans = document.getElementById("coffee-beans");
const grinders = document.getElementById("grinders");
const scales = document.getElementById("scales");
const brewingEquipment = document.getElementById("brewing-equipment");
const coffeeProds = document.querySelector("#coffee-beans .product-cards");

const grinderProds = document.querySelector("#grinders .product-cards");
const scaleProds = document.querySelector("#scales .product-cards");

const brewingProds = document.querySelector("#brewing-equipment .product-cards");



// Reusable card creating function

function createProductCards(products,category,container){
const filteredByCat = products.filter(product => product.category === category);

for(let item of filteredByCat){
const newProductCard = document.createElement("article");
newProductCard.classList.add("featured-card");

newProductCard.style.backgroundImage = `url("${item.image}")`;

const textCard = document.createElement("div");
textCard.classList.add("product-info");

const productTitle = document.createElement("h4");
productTitle.textContent = item.name;

const productDescription = document.createElement("p");
productDescription.textContent = item.description;

const productPrice = document.createElement("p");
productPrice.textContent = `$ ${item.price}`;

textCard.append(productTitle);
textCard.append(productDescription);
textCard.append(productPrice);

newProductCard.append(textCard);

container.append(newProductCard);

}//end  for of loop
}//end createProductCards

createProductCards(products,"coffee",coffeeProds);
createProductCards(products,"grinder",grinderProds);
createProductCards(products,"scale",scaleProds);
createProductCards(products,"brew-method",brewingProds);