document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const options = box.querySelector('.options');
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });
    });
});
