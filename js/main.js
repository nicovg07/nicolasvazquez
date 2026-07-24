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
  if (event.key === 'Escape') {
    closeMenu();
    closeLightbox();
  }
  if (isLightboxOpen()) {
    if (event.key === 'ArrowLeft') showLightboxImage(lightboxIndex - 1);
    if (event.key === 'ArrowRight') showLightboxImage(lightboxIndex + 1);
  }
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

const jobTabs = document.querySelectorAll('[data-job-tab]');

jobTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const isOpen = tab.getAttribute('aria-expanded') === 'true';

    jobTabs.forEach((otherTab) => otherTab.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('[data-job-panel]').forEach((panel) => panel.classList.remove('is-open'));

    if (!isOpen) {
      tab.setAttribute('aria-expanded', 'true');
      document.querySelector(`[data-job-panel="${tab.dataset.jobTab}"]`).classList.add('is-open');
    }
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
const lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;
const lightboxItems = Array.from(document.querySelectorAll('[data-lightbox-src]'));
let lightboxIndex = 0;
let zoomBaseRect = null;

function setZoomOrigin(clientX, clientY) {
  if (!zoomBaseRect) return;
  const x = Math.min(100, Math.max(0, ((clientX - zoomBaseRect.left) / zoomBaseRect.width) * 100));
  const y = Math.min(100, Math.max(0, ((clientY - zoomBaseRect.top) / zoomBaseRect.height) * 100));
  lightboxImg.style.transformOrigin = `${x}% ${y}%`;
}

function resetZoom() {
  if (!lightboxImg) return;
  lightboxImg.classList.remove('is-zoomed');
  lightboxImg.style.transformOrigin = 'center center';
  zoomBaseRect = null;
}

function isLightboxOpen() {
  return !!lightbox && lightbox.classList.contains('is-open');
}

function showLightboxImage(index) {
  if (!lightbox || !lightboxItems.length) return;
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];
  const img = item.querySelector('img');
  resetZoom();
  lightboxImg.src = item.dataset.lightboxSrc;
  lightboxImg.alt = img ? img.alt : '';
}

function openLightbox(index) {
  if (!lightbox) return;
  showLightboxImage(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  if (!lightbox) return;
  resetZoom();
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
}

lightboxItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', () => showLightboxImage(lightboxIndex - 1));
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', () => showLightboxImage(lightboxIndex + 1));
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

if (lightboxImg) {
  lightboxImg.addEventListener('click', (event) => {
    event.stopPropagation();
    if (lightboxImg.classList.contains('is-zoomed')) {
      resetZoom();
    } else {
      zoomBaseRect = lightboxImg.getBoundingClientRect();
      setZoomOrigin(event.clientX, event.clientY);
      lightboxImg.classList.add('is-zoomed');
    }
  });

  lightboxImg.addEventListener('mousemove', (event) => {
    setZoomOrigin(event.clientX, event.clientY);
  });
}

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  document.body.classList.add('has-js');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));
}

const lightSection = document.querySelector('.tfg-statement');
if (lightSection && 'IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      document.body.classList.toggle('nav-dark', entry.isIntersecting);
    });
  }, { rootMargin: '0px 0px -85% 0px' });
  navObserver.observe(lightSection);
}
