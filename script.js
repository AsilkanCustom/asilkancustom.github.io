// Navbar menüsü açma/kapama fonksiyonu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Giriş formu işlemi
document.querySelector('.login-form form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('.login-form input[type="text"]').value;
  if (username.trim()) {
    alert('Giriş yapıldı: ' + username);
    const password = document.querySelector('.login-form input[type="password"]').value;

    // Navbar'da giriş linki yerine hoş geldin mesajı
    const loginLink = document.getElementById('login-link');
    loginLink.innerHTML = `👤 ${username}`;
    loginLink.href = "#"; // Bağlantıyı iptal et
    showWelcomeMessage(username);

    // Örnek doğrulama (gerçek uygulamada sunucu doğrulaması gerekir)
    if (username === "admin" && password === "1234") {
      alert("Giriş başarılı!");
    } else {
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  }
});

function showWelcomeMessage(username) {
  const section = document.getElementById('login');
  const msg = document.createElement('div');
  msg.className = 'welcome-message';
  msg.textContent = `Hoş geldin, ${username}`;
  section.appendChild(msg);
}
