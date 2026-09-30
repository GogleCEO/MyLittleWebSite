document.addEventListener('DOMContentLoaded', function () {
  // Бургер-меню
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mainNav');
  
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Подсветка активного пункта меню
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // Модальное окно (для формы подписки)
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(btn.dataset.modalOpen)?.classList.add('active');
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal')?.classList.remove('active');
    });
  });
});