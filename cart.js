document.addEventListener("DOMContentLoaded", () => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");

  if (cartData.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartData.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "product-card";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100px; height:100px; object-fit:cover;">
      <div style="padding: 10px;">
        <h4>${item.name}</h4>
        <p><b>₹${item.price}</b> × ${item.qty}</p>
        <button onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });
});

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); // Refresh to update the cart
}
