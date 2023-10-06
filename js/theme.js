document.addEventListener('DOMContentLoaded', () => {
  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Initially set the mode and toggle state based on user's system preference
  if (prefersDarkScheme) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true; // Set the toggle switch to on
  }

  darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});
