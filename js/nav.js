document.addEventListener('DOMContentLoaded', () => {
  let isMobileNavOpen = false;
  const menuIcon = document.getElementById('menuIcon');
  const xIcon = document.getElementById('xIcon');
  const navLinks = document.querySelector('.navLinks');
  const mobileNavLinks = document.querySelector('.mobileNavLinks');

  const toggleMobileNav = () => {
    mobileNavLinks.classList.toggle('active', true);
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  };

  const toggleBackToMenu = () => {
    mobileNavLinks.classList.toggle('active', false);
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  };

  menuIcon.addEventListener('click', toggleMobileNav);
  xIcon.addEventListener('click', toggleBackToMenu);

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    navLinks.style.display = isMobile ? 'none' : 'flex';
    menuIcon.style.display = isMobile ? 'block' : 'none';
    xIcon.style.display = 'none';
    mobileNavLinks.style.display =
      isMobileNavOpen && isMobile ? 'flex' : 'none';
  };

  window.addEventListener('resize', handleResize);
  handleResize();
});

window.addEventListener('scroll', () => {
  const sections = ['intro', 'about', 'projects', 'contact'];
  const sectionOffsets = {
    intro: 500,
    about: 600,
    projects: 500,
    contact: 400,
  };

  sections.forEach((section) => {
    const sectionElement = document.getElementById(section);
    const position = sectionElement.getBoundingClientRect();
    const offset = sectionOffsets[section] || 0;

    const isActive =
      position.top <= window.innerHeight - offset && position.bottom >= offset;
    document
      .querySelectorAll(
        `.navLinks a[href="#${section}"], .mobileNavLinks a[href="#${section}"]`
      )
      .forEach((navLink) => navLink.classList.toggle('active', isActive));
  });
});

window.addEventListener('scroll', () => {
  const element = document.getElementById('nav');
  const isScrolled = window.scrollY > 100;
  element.style.visibility = isScrolled ? 'visible' : 'hidden';
  element.style.opacity = isScrolled ? '1' : '0';
});
