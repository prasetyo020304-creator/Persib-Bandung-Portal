// Efek animasi scroll untuk paragraf sejarah
const paragraphs = document.querySelectorAll('.history-content p');

window.addEventListener('scroll', () => {
    paragraphs.forEach(p => {
        const position = p.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            p.classList.add('fade-in');
        }
    });
});
