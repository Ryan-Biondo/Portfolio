document.addEventListener('DOMContentLoaded', () => {
  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Initially set the mode and toggle state based on user's system preference
  if (prefersDarkScheme) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
  });
});

document.getElementById('grabTab').addEventListener('click', function () {
  document.getElementById('socials').classList.toggle('hidden');
});
