const images = document.getElementsByClassName("burger-products-item");

for (zindex = 1; zindex <= images.length; zindex++) {
  images[zindex - 1].style.zIndex = `-${zindex}`;
}

function createProduct(product) {
  const el = document.createElement("img");

  el.setAttribute("class", "burger-products-item");
  el.setAttribute("src", `./burger-layers/${product}.svg`);

  const box = document.getElementById("burger-products");

  el.style.zIndex = `-${box.childElementCount}`;

  box.appendChild(el);
}

const btnTomato = document.querySelector(".tomato");
const btnOnion = document.querySelector(".onion");
const btnCheese = document.querySelector(".cheese");
const btnMeat = document.querySelector(".meat");
const btnPickle = document.querySelector(".pickle");
const scan = document.querySelector("scan"); 
const btnSalad = document.querySelector(".salad"); 
let summ = 4;


btnTomato.addEventListener("click", (event)=>{
    summ += 1;
    scan.textContent = summ;
    createProduct(event.target.innerHTML.toLowerCase());
})

btnOnion.addEventListener("click", (event) => {
  summ += 1;
  scan.textContent = summ;
  createProduct(event.target.innerHTML.toLowerCase());
});

btnCheese.addEventListener("click", (event) => {
  summ += 2;
  scan.textContent = summ;
  createProduct(event.target.innerHTML.toLowerCase());
});

btnMeat.addEventListener("click", (event) => {
  summ += 3;
  scan.textContent = summ;
  createProduct(event.target.innerHTML.toLowerCase());
});

btnPickle.addEventListener("click", (event) => {
  summ += 1;
  scan.textContent = summ;
  createProduct(event.target.innerHTML.toLowerCase());
});

btnSalad.addEventListener("click", (event) => {
  summ += 2;
  scan.textContent = summ;
  createProduct(event.target.innerHTML.toLowerCase());
});

const burger = document.querySelector("#burger-products");


burger.addEventListener("click", (event) => {
    burger.remove(event.target);

});


const buy = document.querySelector("#buy");

buy.addEventListener("click", () => {
    let random = Math.floor(Math.random() * (35 - 10 + 1) + 10);
    alert(`Buyurtmangiz qabul qilindi, sizning navbatingiz: ${random}, narxi: ${summ}`);
    burger.innerHTML = "";
    summ = 4;
    scan.textContent = summ;
})

const reset = document.querySelector("#reset");

reset.addEventListener("click", ()=>{
    burger.innerHTML = "";
    summ = 4;
    scan.textContent = summ;
})