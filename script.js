// Navbar menüsü için açma/kapama fonksiyonu
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// Sepet öğelerini yönetmek için sepete ekleme işlevi
function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

// Sepet görüntüsünü güncelleme
function updateCartDisplay() {
  const cartLink = document.querySelector('.cart-link');
  cartLink.textContent = `🛒 Sepet (${cart.length})`;
}
