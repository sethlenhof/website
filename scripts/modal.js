// Description: This file contains the code to open and close the modal windows.
document.querySelectorAll('.content-wrapper').forEach(item => {
    item.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
        document.body.classList.add('no-scroll')
    });
});

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the modal from reopening
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.style.display = "none";
        });
    }
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});