function highlightNavLinks() {
    // Get all sections and nav links
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
  
    let passedSectionId = '';
  
    // Iterate through sections to see which is in viewport
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        passedSectionId = section.getAttribute('id');
      }
    });
  
    // Iterate through nav links to add or remove active class
    navLinks.forEach(link => {
      link.classList.remove('current');
      if (link.getAttribute('href') === '#' + passedSectionId) {
        link.classList.add('current');
      }
    });
  }
  
// Listen for scroll events
window.addEventListener('scroll', highlightNavLinks);
document.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollTop / scrollHeight;

  // Calculate new background position based on scroll percentage
  const newBackgroundPosition = scrollPercentage * 100;

  // Update the CSS variable with the new position
  document.documentElement.style.setProperty('--scroll-position', `${newBackgroundPosition}%`);
});

// Initial setting to ensure it starts from the top
document.documentElement.style.setProperty('--scroll-position', '0%');