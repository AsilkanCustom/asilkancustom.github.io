// Sepete ürün ekleme
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".product-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h3").textContent;
      alert(`${productName} sepete eklendi!`);
    });
  });
});
