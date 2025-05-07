document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total");
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Sepetinizde ürün bulunmamaktadır.</p>";
  } else {
    let total = 0;
    cart.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `<p>${item.name} - ₺${item.price}</p>`;
      cartItemsContainer.appendChild(itemElement);
      total += item.price;
    });
    
    totalPriceElement.querySelector("span").textContent = total.toFixed(2);
  }
});
