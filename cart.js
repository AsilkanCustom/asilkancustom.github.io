document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total");

  // Sepet verilerini localStorage'dan alıyoruz.
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Sepet boşsa mesaj gösteriyoruz
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Sepetinizde ürün bulunmamaktadır.</p>";
  } else {
    renderCart();
  }

  // Sepet görünümünü render etme fonksiyonu
  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    // Sepetteki ürünleri döngü ile listele
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p>${item.name} - ₺${item.price}</p>
        <button onclick="removeItem(${index})">Kaldır</button>
      `;
      cartItemsContainer.appendChild(div);
      total += item.price;
    });

    // Toplam fiyatı güncelle
    totalPriceElement.querySelector("span").textContent = total.toFixed(2);
  }

  // Sepetten ürün kaldırma fonksiyonu
  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Sepeti tekrar render et
  };
});
