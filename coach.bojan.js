document.addEventListener('DOMContentLoaded', function() {
    const glow = document.querySelector('.coach-photo .glow');
    glow.style.opacity = '0';
    setTimeout(function() {
        glow.style.transition = 'opacity 1.2s cubic-bezier(.28,.84,.42,1.02)';
        glow.style.opacity = '1';
    }, 500);
});