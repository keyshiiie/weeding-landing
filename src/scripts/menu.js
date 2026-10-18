export function initMobileMenu() {
  const menuBtn = document.getElementById('open-menu');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !closeBtn || !mobileMenu) return;

  // Открыть меню
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Блокируем скролл
  });

  // Функция закрытия
  const closeMenu = () => {
    mobileMenu.classList.remove('is-active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Возвращаем скролл
  };

  // Закрыть по кнопке
  closeBtn.addEventListener('click', closeMenu);

  // Закрыть при клике на ссылку
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закрыть при клике вне контента (по фону)
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
}