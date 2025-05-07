let cart = [];

function updateCart() {
  const cartSummary = document.getElementById('cart-summary');
  cartSummary.innerHTML = ''; // Sepeti sıfırlayın
  if (cart.length > 0) {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `<p>${item.name} - ₺${item.price.toFixed(2)}</p>`;
      cartSummary.appendChild(itemDiv);
    });
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Toplam: ₺${total.toFixed(2)}</strong>`;
    cartSummary.appendChild(totalDiv);
    const checkoutButton = document.createElement('button');
    checkoutButton.innerHTML = 'Ödeme Yap';
    checkoutButton.onclick = () => {
      alert('Ödeme işlemi başlatıldı!');
    };
    cartSummary.appendChild(checkoutButton);
  } else {
    cartSummary.innerHTML = '<p>Sepetiniz boş.</p>';
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} sepete eklendi!`);
  updateCart();
}

// Sepet güncellemeleri için
document.addEventListener('DOMContentLoaded', () => {
  // Ürünlere "Sepete Ekle" işlevi ekleyelim
  const addButtons = document.querySelectorAll('.product-card button');
  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const name = productCard.querySelector('p').innerText;
      const price = parseFloat(productCard.querySelector('p:nth-of-type(2)').innerText.replace('₺', '').trim());
      addToCart(name, price);
    });
  });

  // Sepet gösterme
  const cartLink = document.getElementById('cart-link');
  cartLink.addEventListener('click', () => {
    document.getElementById('cart-summary').classList.toggle('show');
  });
});

