import {
  cart,
  removeFromCart,
  updateCheckoutCount,
  updateQuantity,
  updateDeliveryOption,
} from "../cart.js";
import { fruitsData } from "../../data/fruits-data.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/delivery-options-data.js";
import { renderPaymentSummary } from "./payment-summary.js";

export function renderOrderSummary() {
  updateCheckoutCount();

  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct = fruitsData.find(
      (product) => product.id === productId
    );

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd,MMMM D");

    cartSummaryHTML += `
  <div class="product product-${matchingProduct.id}">
      <div class="top-section">
      <p class="delivery-date">Delivery date : <strong>${dateString}</strong></p>
      </div>
      <div class="bottom-section">
      <div class="product-information">
          <div class="product-information-left">
          <img src=${matchingProduct.img} alt=${matchingProduct.alt} />
          </div>
          <div class="product-information-right">
          <p class="product-name">${matchingProduct.name}</p>
          <p class="product-price">&#8377;${
            matchingProduct.quantity[0].price * cartItem.quantity
          }</p>
          <p class="product-quantity product-quantity-${matchingProduct.id}">${
      matchingProduct.quantity[0].value
    }gms X <span>${cartItem.quantity}</span></p>
          <div class="action">
              <span class="update-quantity-link" data-product-id="${
                matchingProduct.id
              }">UPDATE</span>
              <input name="quantity-input" class="quantity-input quantity-input-${
                matchingProduct.id
              }" placeholder="0">
              <span class="save-quantity-link link-primary save-link" data-product-id="${
                matchingProduct.id
              }">SAVE</span>
              <span class="delete-quantity-link" data-product-id="${
                matchingProduct.id
              }">DELETE</span>
          </div>
          </div>
      </div>
      <div class="product-delivery-options">
          <p class="delivery-options-title">Choose a delivery option:</p>
          <div class="delivery-options">
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
      </div>
      </div>
  </div>
  `;
  });

  document.querySelector(".product-summary").innerHTML = cartSummaryHTML;

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd,MMMM D");
      const priceString =
        deliveryOption.price === 0
          ? "FREE"
          : `&#8377;${deliveryOption.price} - `;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
      <div class="delivery-option" 
      data-product-id="${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}"
      >
              <input type="radio" 
              ${isChecked ? "checked" : ""}
              name=${matchingProduct.id} class="radio" title="${
        matchingProduct.id
      }">
              <div>
                  <p class="delivery-date">${dateString}</p>
                  <p class="delivery-shipping-type">${priceString} Shipping</p>
              </div>
          </div>
      `;
    });
    return html;
  }

  document.querySelectorAll(".radio").forEach((btn) => {
    btn.addEventListener("change", () => {
      location.href = location.href;
    });
  });

  document.querySelectorAll(".delete-quantity-link").forEach((deleteLink) => {
    deleteLink.addEventListener("click", () => {
      const productId = deleteLink.dataset.productId;
      removeFromCart(productId);

      renderOrderSummary();
      updateCheckoutCount();
      renderPaymentSummary();
    });
  });

  document.querySelectorAll(".update-quantity-link").forEach((updateLink) => {
    updateLink.addEventListener("click", () => {
      const productId = updateLink.dataset.productId;
      document
        .querySelector(`.product-${productId}`)
        .classList.add("is-editing");
    });
  });

  document.querySelectorAll(".save-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      document
        .querySelector(`.product-${productId}`)
        .classList.remove("is-editing");

      const quantityInput = document.querySelector(
        `.quantity-input-${productId}`
      );
      const newQuantity = Number(quantityInput.value);

      if (newQuantity < 0 || newQuantity > 10 || isNaN(newQuantity)) {
        alert(
          "Quantity must be at least 0, less than or equal to 10, and also a valid number my friend"
        );
        return;
      }

      updateQuantity(productId, newQuantity);

      document.querySelector(`.product-quantity-${productId} span`).innerHTML =
        newQuantity;
      updateCheckoutCount();
      location.reload(true);
    });
  });

  document.querySelectorAll(".delivery-option").forEach((element) => {
    element.addEventListener("change", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
