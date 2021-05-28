let slider = document.querySelectorAll('#slider li');
let current = 0;
let total = slider.length - 1;

window.setInterval(function() {
    let index = current ? current - 1 : total;
    slider[index].className = '';
    slider[current].className = 'slider-active';
    current = current >= total ? 0 : current + 1;
}, 2000);