// Toggle nav menu on mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const xIcon = document.getElementById('xIcon');
  const navLinks = document.querySelector('.navLinks');

  menuIcon.addEventListener('click', function () {
    menuIcon.style.display = 'none';
    xIcon.style.display = 'block';
    navLinks.classList.add('navLinksActive');
  });

  xIcon.addEventListener('click', function () {
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    navLinks.classList.remove('navLinksActive');
  });
});

// Highlight nav item on scroll
window.addEventListener('scroll', function () {
  const sections = ['intro', 'about', 'projects', 'contact'];

  sections.forEach((section) => {
    const sectionElement = document.getElementById(section);
    const position = sectionElement.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
      document.querySelectorAll('.navItem').forEach((navItem) => {
        navItem.classList.remove('navItemActive');
      });
      document
        .querySelector(`a[href="#${section}"] li`)
        .classList.add('navItemActive');
    }
  });
});

// JavaScript to hide the arrow on scroll
window.addEventListener('scroll', function () {
  var element = document.getElementById('nav');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // 100px down from the top
    element.style.visibility = 'visible';
    element.style.opacity = '1';
  } else {
    element.style.visibility = 'hidden';
    element.style.opacity = '0';
  }
});

// Menu icon toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const xIcon = document.getElementById('xIcon');
  const navLinks = document.getElementById('navLinks');

  menuIcon.addEventListener('click', function () {
    menuIcon.style.display = 'none';
    xIcon.style.display = 'block';
    navLinks.style.display = 'flex'; // Make sure the nav links are displayed
  });

  xIcon.addEventListener('click', function () {
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    navLinks.style.display = 'none'; // Hide the nav links
  });
});
