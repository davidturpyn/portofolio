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


const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.company-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Reset active class
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Activate current
    tab.classList.add('active');
    const target = tab.getAttribute('data-company');
    document.getElementById(target).classList.add('active');
  });
});
