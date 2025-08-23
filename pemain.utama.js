// Fade-in animation for player cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.player-card').forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px) scale(0.97)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.7s cubic-bezier(.32,.82,.52,.99),transform 0.7s cubic-bezier(.32,.82,.52,.99)';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0) scale(1)';
        }, 140 + i*70);
    });
});