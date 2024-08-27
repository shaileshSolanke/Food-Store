import { cart } from "./cart.js";
const nav = document.querySelector("nav");

function updateCartQuantity() {
  let count = 0;
  cart.forEach((cartItem) => {
    count += cartItem.quantity;
  });
  document.querySelector(".cart-quantity").innerHTML = count;
}

nav.innerHTML = `
    <div class="nav-left">
        <img class="menu" src="./assets/icons/menu-burger.svg" alt="menu-burger" />
        <div class="sidebar"></div>
    </div>
    <div class="nav-middle">
        <img src="./assets/icons/search.svg" alt="search" />
        <input id="search" type="text" placeholder="Search for Something" />
    </div>
    <div class="nav-right">
        <a href="#"><img src="./assets/icons/bell.svg" alt="bell" /></a>
        <a href="./checkout.html"><img src="./assets/icons/shopping-cart.svg" alt="shopping-cart" /></a>
        <span class="cart-quantity">0</span>
    </div>
`;

updateCartQuantity();
