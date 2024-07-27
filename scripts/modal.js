document.addEventListener('DOMContentLoaded', (event) => {
    // Get all buttons that open modals
    var buttons = document.querySelectorAll('.content-wrapper');
    
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
            closeModal(this.closest('.modal'));
            document.body.classList.remove('no-scroll');
        });
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
            document.body.classList.remove('no-scroll');
        }
    });

    // Close modal with Escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(document.querySelector('.modal.show'));
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

