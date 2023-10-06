document.addEventListener('DOMContentLoaded', () => {
  // Initially set the mode based on user's system preference
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.body.classList.add('dark-mode');
  }

  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});
