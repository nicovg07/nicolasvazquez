const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.getElementById('site-menu');

function openMenu() {
  siteMenu.classList.add('is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  siteMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  siteMenu.classList.contains('is-open') ? closeMenu() : openMenu();
});

siteMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
