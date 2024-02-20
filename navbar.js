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