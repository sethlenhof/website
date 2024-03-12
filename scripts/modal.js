// Description: This file contains the code to open and close the modal windows.
document.querySelectorAll('.content-wrapper').forEach(item => {
    item.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('show');
        document.body.classList.add('no-scroll');
    });
});

function closeModal(modal) {
    modal.classList.add('hide');

    modal.addEventListener('transitionend', function handler(event) {
        if (event.propertyName === 'opacity') {
            modal.classList.remove('show', 'hide');
            modal.removeEventListener('transitionend', handler);
        }
    }, { once: true });
}

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
        document.body.classList.remove('no-scroll');
    });
});

// Close modal by clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
        document.body.classList.remove('no-scroll');
    }
});

// Close modal with Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            closeModal(modal);
            document.body.classList.remove('no-scroll');
        });
    }
});
