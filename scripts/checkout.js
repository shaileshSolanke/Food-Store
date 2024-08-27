import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
import { cart } from "./cart.js";

renderOrderSummary();
renderPaymentSummary();

var order = document.querySelector(".place-order-btn");

if (cart.length === 0) {
  order.disabled = true;
}

order.addEventListener("click", () => {
  order.innerHTML=`<img src="../assets/icons/loading.svg">`
  setTimeout(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    const cartData = cart.map(
      (item) => `
    Product-Id : ${item.productId}
    Quantity : ${item.quantity}
    Delivery-Option-Id : ${item.deliveryOptionId}
  `
    );

    const receiptContent = `
    Order Receipt

        ${cartData}

    Thank you for your order!
  `;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "receipt.txt";
    a.click();
    URL.revokeObjectURL(url);

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    location.href = "index.html";
  }, 3000);
});
