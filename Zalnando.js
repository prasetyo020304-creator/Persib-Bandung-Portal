// Fade-in animation for profile card and stat boxes
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.profile-card');
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px) scale(0.97)';
    setTimeout(() => {
        card.style.transition = 'opacity 0.8s cubic-bezier(.32,.82,.52,.99),transform 0.8s cubic-bezier(.32,.82,.52,.99)';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0) scale(1)';
    }, 200);

    document.querySelectorAll('.stat-box').forEach((box, i) => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(25px) scale(0.97)';
        setTimeout(() => {
            box.style.transition = 'opacity 0.7s cubic-bezier(.32,.82,.52,.99),transform 0.7s cubic-bezier(.32,.82,.52,.99)';
            box.style.opacity = 1;
            box.style.transform = 'translateY(0) scale(1)';
        }, 400 + i*80);
    });
});