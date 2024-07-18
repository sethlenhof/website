document.addEventListener('DOMContentLoaded', (event) => {
  // Get all buttons that open modals
  var buttons = document.querySelectorAll('.openModalBtn');

  // Iterate over buttons and attach click event
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          var modalId = this.getAttribute('data-modal');
          var modal = document.getElementById(modalId);
          modal.style.display = "block";
          document.body.classList.add('no-scroll');
      });
  });

  // Get all close buttons in modals
  var closeButtons = document.querySelectorAll('.close');

  // Attach click event to each close button
  closeButtons.forEach(button => {
      button.addEventListener('click', function() {
          var modal = this.closest('.projectModal');
          modal.style.display = "none";
          document.body.classList.remove('no-scroll');
      });
  });

  // Close modal when clicking outside of modal content
  window.addEventListener('click', function(event) {
      if (event.target.classList.contains('projectModal')) {
          event.target.style.display = "none";
          document.body.classList.remove('no-scroll');
      }
  });
});

let currentSlide = 0;

function moveCarousel(n) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    currentSlide += n;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    const translateX = -currentSlide * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}
