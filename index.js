// Fade-in animation for cards and slider items
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px) scale(0.97)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.7s cubic-bezier(.32,.82,.52,.99),transform 0.7s cubic-bezier(.32,.82,.52,.99)';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0) scale(1)';
        }, 180 + i*120);
    });
    document.querySelectorAll('.player-card').forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px) scale(0.97)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s cubic-bezier(.32,.82,.52,.99),transform 0.6s cubic-bezier(.32,.82,.52,.99)';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0) scale(1)';
        }, 350 + i*70);
    });
});