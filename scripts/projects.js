document.addEventListener('DOMContentLoaded', (event) => {
    // Get all buttons that open modals
    var buttons = document.querySelectorAll('.openModalBtn');

    // Iterate over buttons and attach click event
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            modal.classList.remove('hide');
            modal.classList.add('show');
            document.body.classList.add('no-scroll');
        });
    });

    // Get all close buttons in modals
    var closeButtons = document.querySelectorAll('.close');

    // Attach click event to each close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.projectModal'));
            document.body.classList.remove('no-scroll');
        });
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('projectModal')) {
            closeModal(event.target);
            document.body.classList.remove('no-scroll');
        }
    });
});

function closeModal(modal) {
    modal.classList.add('hide');

    modal.addEventListener('transitionend', function handler(event) {
        if (event.propertyName === 'opacity') {
            modal.classList.remove('show');
            modal.removeEventListener('transitionend', handler);
        }
    }, { once: true });
}


function resetCarousel(modalId) {
    const carousel = document.querySelector(`#${modalId} .carousel-inner`);
    if (carousel) {
        carousel.style.transform = 'translateX(0%)';
        carousel.setAttribute('data-slide-index', 0);
    }
}

function moveCarousel(n, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    const images = carousel.querySelectorAll('img');
    let currentSlide = parseInt(carousel.getAttribute('data-slide-index') || 0);

    currentSlide += n;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    carousel.setAttribute('data-slide-index', currentSlide);

    const translateX = -currentSlide * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}
