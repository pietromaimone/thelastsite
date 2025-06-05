document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('toggle-theme');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'light') {
      document.body.classList.add('light-theme');
    }
  
    themeBtn?.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  
    
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookie');
  
    if (localStorage.getItem('cookieAccepted')) {
      banner.style.display = 'none';
    }
  
    acceptBtn?.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', 'true');
      banner.classList.add('hide');
      setTimeout(() => {
        banner.style.display = 'none';
      }, 500);
    });
  });
  
