document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookie');
  
    if (localStorage.getItem('cookieAccepted')) {
      banner.style.display = 'none';
    }
  
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', 'true');
      banner.classList.add('hide');
  
      // Aguarda a transição antes de ocultar
      setTimeout(() => {
        banner.style.display = 'none';
      }, 500); // Tempo da transição
    });
  });
  
