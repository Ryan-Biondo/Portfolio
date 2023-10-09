// Simulate asset loading for 3 seconds
setTimeout(() => {
  document.getElementById('loadingEllipsis').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
}, 3000);

// Hide the arrow on scroll
document.addEventListener('scroll', () => {
  const arrowElement = document.querySelector('.scroll-indicator');

  arrowElement.style.opacity = window.scrollY > 100 ? '0' : '1';
});
