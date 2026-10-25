const coffeeBeans = document.getElementById("coffee-beans");

const grinders = document.getElementById("grinders");
const scales = document.getElementById("scales");
const brewingEquipment = document.getElementById("brewing-equipment");

function createProductCards(products,category){
const filteredByCat = products.filter(product => product.category === category);

for(let filteredItem of filteredByCat){
const newProductCard = document.createElement("article");
newProductCard.classList = ("featured-card");

newProductCard.style.backgroundImage = `url("${filteredItem.image}")`;

}//end  for of loop
}//end createProductCards