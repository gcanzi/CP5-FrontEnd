const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById('emailForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  document.getElementById('emailInput').value = '';
  msg.classList.remove('hidden');
  setTimeout(() => msg.classList.add('hidden'), 5000);
});
