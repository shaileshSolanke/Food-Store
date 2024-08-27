export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "r8bbkahi5ater3brkgvf-fresh-blueberry",
      quantity: 1,
      deliveryOptionId: "1",
    },
    {
      productId: "taq9an6zfirfn4r1wzdc-apple-delicious",
      quantity: 2,
      deliveryOptionId: "2",
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingProduct = cart.find((product) => productId === product.productId);

  if (matchingProduct) {
    matchingProduct.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}

export function updateCheckoutCount() {
  let checkoutCount = 0;
  cart.forEach((cartItem) => {
    checkoutCount += cartItem.quantity;
  });

  document.querySelector(
    "h1"
  ).innerHTML = `Checkout &#40; ${checkoutCount} items &#41;`;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.quantity = newQuantity;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingProduct = cart.find((product) => productId === product.productId);

  matchingProduct.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
