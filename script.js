// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Banner Logic
  const slide = document.getElementById("bannerSlide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function updateBanner() {
    if (!slide || dots.length === 0) return;
    slide.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    index = (index + 1) % dots.length;
    updateBanner();
  }, 4000);
  updateBanner();

  // Cart Logic
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
      cartCount.textContent = cart.length > 0 ? cart.length : "";
    }
  }

  function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert(`${product.name} added to cart!`);
  }

  // Attach to buttons with class .add-to-cart
  const cartButtons = document.querySelectorAll(".add-to-cart");
  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: btn.dataset.price,
        img: btn.dataset.img,
      };
      addToCart(product);
    });
  });

  updateCartDisplay();
});
