// ── ESTORA CAPITAL — SHARED JS ──

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Nav scroll tint
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  nav.style.background = window.scrollY > 60
    ? 'rgba(6,14,26,0.99)'
    : 'rgba(10,22,40,0.97)';
});

// Active nav link
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });
})();

// Hamburger toggle
const hamburger = document.querySelector('.nav-hamburger');
const drawer    = document.querySelector('.nav-drawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
