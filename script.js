// NAV scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// REVEAL on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('up'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => obs.observe(el));

// year
document.getElementById('yr').textContent = new Date().getFullYear();