function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} sepete eklendi!`);
}

// Sepete ürün ekleme
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".product-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Ürün adını ve fiyatını buton üzerinden alıyoruz
      const productCard = button.parentElement;
      const productName = productCard.querySelector("h3").textContent;
      const productPrice = parseFloat(productCard.querySelector("p").textContent.replace("₺", "").trim());

      // Sepete ekliyoruz
      addToCart(productName, productPrice);
    });
  });
});
