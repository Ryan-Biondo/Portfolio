document.addEventListener('DOMContentLoaded', function () {
  let isMobileNavOpen = false;
  const menuIcon = document.getElementById('menuIcon');
  const xIcon = document.getElementById('xIcon');
  const navLinks = document.querySelector('.navLinks');
  const mobileNavLinks = document.querySelector('.mobileNavLinks');

  // Function to toggle the mobile dropdown menu
  function toggleMobileNav() {
    mobileNavLinks.classList.add('active');
    mobileNavLinks.style.display = 'flex'; // Ensure mobileNavLinks is displayed
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }

  // Function to toggle back to the menu icon
  function toggleBackToMenu() {
    mobileNavLinks.classList.remove('active');
    mobileNavLinks.style.display = 'none'; // Ensure mobileNavLinks is hidden
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  }

  // Add click event listeners to the menu icon and close icon
  menuIcon.addEventListener('click', toggleMobileNav);
  xIcon.addEventListener('click', toggleBackToMenu);

  // Function to handle screen resize
  function handleResize() {
    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
      menuIcon.style.display = 'block';
      xIcon.style.display = 'none';
      if (!isMobileNavOpen) {
        mobileNavLinks.style.display = 'none';
      }
    } else {
      navLinks.style.display = 'flex';
      menuIcon.style.display = 'none';
      mobileNavLinks.style.display = 'none';
      xIcon.style.display = 'none';
    }
  }

  // Add event listener for screen resize
  window.addEventListener('resize', handleResize);

  // Initial call to handle screen size on page load
  handleResize();
});

// Highlight nav item on scroll

window.addEventListener('scroll', function () {
  const sections = ['intro', 'about', 'projects', 'contact'];
  const sectionOffsets = {
    intro: 400,
    about: 400,
    projects: 400,
    contact: 400,
  };

  sections.forEach((section) => {
    const sectionElement = document.getElementById(section);
    const position = sectionElement.getBoundingClientRect();
    const offset = sectionOffsets[section] || 0;

    if (
      position.top <= window.innerHeight - offset &&
      position.bottom >= offset
    ) {
      // Remove active class from all nav links
      document
        .querySelectorAll('.navLinks a, .mobileNavLinks a')
        .forEach((navLink) => {
          navLink.classList.remove('active');
        });

      // Add active class to the nav link corresponding to the section in view
      document
        .querySelector(
          `.navLinks a[href="#${section}"], .mobileNavLinks a[href="#${section}"]`
        )
        .classList.add('active');
    }
  });
});

// JavaScript to hide the arrow on scroll
window.addEventListener('scroll', function () {
  var element = document.getElementById('nav');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    element.style.visibility = 'visible';
    element.style.opacity = '1';
  } else {
    element.style.visibility = 'hidden';
    element.style.opacity = '0';
  }
});
