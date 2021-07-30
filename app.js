const slides = document.querySelectorAll('.slide');

document.body.style.background =  '#136354';

slides.forEach(slide => {
    
    slide.addEventListener('click', () => {
        clearActiveClass();

        slide.classList.add('active');
    });
})

const clearActiveClass = () => {
    slides.forEach( slide => {
        slide.classList.remove('active');
    });
}

