let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

function removeFromCart(productIndex) {
  cart.splice(productIndex, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('#cart-total');
  
  cartItemsContainer.innerHTML = ''; // Sepet öğelerini temizle
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Sepetiniz boş.</p>';
  } else {
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <p>${item.name} - ₺${item.price}</p>
        <button onclick="removeFromCart(${index})">Kaldır</button>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
    cartTotal.textContent = `₺${total.toFixed(2)}`;
  }
}

document.querySelector('#checkout-btn').addEventListener('click', () => {
  alert('Ödeme işlemi gerçekleştiriliyor...');
  // Ödeme işlemleri buraya eklenecek
});
