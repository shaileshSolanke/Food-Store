import { cart } from "../cart.js";
import { getProduct } from "../../data/fruits-data.js";
import { getDeliveryOption } from "../../data/delivery-options-data.js";

export function renderPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.quantity[0].price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.price;
  });
  const totalBeforetax = productPrice + shippingPrice;
  const tax = totalBeforetax * 0.1;

  const totalAmount = totalBeforetax + tax;

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const PaymentSummaryHTML = `
  <p class="title">Order Summary</p>
  <div class="payment-top-section">
    <div class="pure">
        <div>
            <p>Items &#40; ${cartQuantity} &#41; :</p>
            <p>&#8377;${productPrice}</p>
        </div>
        <div>
            <p>Shipping & Handling :</p>
            <p>&#8377;${shippingPrice}</p>
        </div>
    </div>
    <div class="tax">
        <div>
            <p>Total before Tax :</p>
            <p>&#8377;${totalBeforetax}</p>
        </div>
        <div>
            <p>Estimated Tax &#40; 10% &#41; :</p>
            <p>&#8377;${tax.toFixed(2)}</p>
        </div>
        <div>
            <p>Total :</p>
            <p>&#8377;${totalAmount.toFixed(2)}</p>
        </div>
    </div>
</div>
<div class="payment-bottom-section">
    <div>
        <p>Order total :</p>
        <p>&#8377;${Math.round(totalAmount)}</p>
    </div>
    <button class="place-order-btn" >PLACE YOUR ORDER</button>
</div>
  `;
  document.querySelector(".payment-summary").innerHTML = PaymentSummaryHTML;
}
