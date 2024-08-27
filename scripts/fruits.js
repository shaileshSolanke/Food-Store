import { fruitsData } from "../data/fruits-data.js";
import { cart,addToCart } from "../scripts/cart.js";

const fruits = document.querySelector(".fruits");

fruitsData.forEach((fruit, index) => {
  fruits.innerHTML += `
<div class="fruit" data-index="${index}">
        <div class="fruit-image">
          <img class="img" src=${fruit.img} alt=${fruit.alt} />
        </div>
        <div class="fruit-details">
          <div class="fruit-details-head">
            <p class="fruit-name">${fruit.name} <small>${
    fruit.quantity[0].value
  }gms</small></p>
            <img src="./assets/icons/veg.svg" alt="veg-icon" />
          </div>
          <div class="fruit-price-table">
            <table>
              <tr>
                <td>MRP</td>
                <td>Price</td>
                <td rowspan="3" class="save"><strong>&#8377;${
                  fruit.quantity[0].mrp - fruit.quantity[0].price
                }<br/>OFF</strong></td>
              </tr>
              <tr>
                <td class="mrp"><del>&#8377;${fruit.quantity[0].mrp}</del></td>
                <td class="price"><strong>&#8377;${
                  fruit.quantity[0].price
                }</strong></td>
              </tr>
              <tr>
                <td colspan="2"><small>(Inclusive of all taxes)</small></td>
              </tr>
            </table>
          </div>
          <div class="fruit-details-bottom">
            <div class="fruit-quantity">
                <select class="select-fruit-quantity" data-index="${index}">
                    ${fruit.quantity
                      .map(
                        (q) =>
                          `<option value="${q.value}">${q.value} GMS</option>`
                      )
                      .join("")}
                </select>
                <button class="add-to-cart-button" data-fruit-id="${
                  fruit.id
                }">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
`;

  document.querySelectorAll(".select-fruit-quantity").forEach((select) => {
    select.addEventListener("change", (e) => {
      const selectedIndex = e.target.getAttribute("data-index");
      const selectedQuantity = e.target.value;
      const fruit = fruitsData[selectedIndex];

      const selectedMRP = fruit.quantity.find(
        (q) => q.value === selectedQuantity
      ).mrp;

      const selectedPrice = fruit.quantity.find(
        (q) => q.value === selectedQuantity
      ).price;

      const quantityElement = e.target
        .closest(".fruit")
        .querySelector(".fruit-name small");
      quantityElement.innerHTML = `${selectedQuantity}gms`;

      const MRPElement = e.target.closest(".fruit").querySelector(".mrp del");
      MRPElement.innerHTML = `&#8377;${selectedMRP}`;

      const priceElement = e.target
        .closest(".fruit")
        .querySelector(".price strong");
      priceElement.innerHTML = `&#8377;${selectedPrice}`;

      const saveElement = e.target
        .closest(".fruit")
        .querySelector(".save strong");
      saveElement.innerHTML = `&#8377;${selectedMRP - selectedPrice}<br>OFF`;
    });
  });
});

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((fruitItem) => (cartQuantity += fruitItem.quantity));

  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

function successMsg() {
  const successImg = document.querySelector(".success-img");
  successImg.style = `right:-80px;`;
  setTimeout(() => {
    successImg.style = `right:-680px;`;
  }, 1500);
}

document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const fruitId = button.dataset.fruitId;
    addToCart(fruitId);
    updateCartQuantity();
    successMsg();
  });
});
