 // Smooth scroll with focus for accessibility on nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) {
        section.focus({ preventScroll: true });
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });