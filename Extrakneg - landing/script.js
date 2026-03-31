document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});
