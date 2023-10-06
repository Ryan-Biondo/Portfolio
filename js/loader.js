// Simulating asset loading for 3 seconds
setTimeout(function () {
  document.getElementById('loadingEllipsis').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
}, 3000);

// JavaScript to hide the arrow on scroll
document.addEventListener('scroll', function () {
  const arrowElement = document.querySelector('.scroll-indicator');

  if (window.scrollY > 100) {
    // Hide after scrolling 100px
    arrowElement.style.opacity = '0';
  } else {
    arrowElement.style.opacity = '1';
  }
});
