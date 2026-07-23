const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.getElementById('site-menu');
const projectsMenu = document.getElementById('projects-menu');
const projectsToggle = document.querySelector('[data-submenu-toggle]');
const projectsBack = document.querySelector('[data-submenu-back]');

function openMenu() {
  siteMenu.classList.add('is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  siteMenu.classList.remove('is-open');
  projectsMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = siteMenu.classList.contains('is-open') || projectsMenu.classList.contains('is-open');
  isOpen ? closeMenu() : openMenu();
});

projectsToggle.addEventListener('click', () => {
  siteMenu.classList.remove('is-open');
  projectsMenu.classList.add('is-open');
});

projectsBack.addEventListener('click', () => {
  projectsMenu.classList.remove('is-open');
  siteMenu.classList.add('is-open');
});

document.querySelectorAll('#site-menu a, #projects-menu a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const currentPage = location.pathname.split('/').pop() || 'index.html';
const projectPages = ['tfg.html', 'rail-folding-package.html', '3ds-max-rendering.html'];

document.querySelectorAll('#site-menu a[href], #projects-menu a[href]').forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('is-current');
  }
});

if (projectPages.includes(currentPage)) {
  projectsToggle.classList.add('is-current');
}

const emailLink = document.getElementById('contact-email');
if (emailLink) {
  emailLink.href = `mailto:${emailLink.dataset.user}@${emailLink.dataset.domain}`;
}

const telLink = document.getElementById('contact-tel');
if (telLink) {
  telLink.href = `tel:${telLink.dataset.prefix}${telLink.dataset.number}`;
}
