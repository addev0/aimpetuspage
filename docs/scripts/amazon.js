// Keep the contact bar transparent for as long as the hero is visible.
(() => {
    const topbar = document.querySelector('.site-topbar');
    const hero = document.querySelector('.amazon-hero');
    if (!topbar || !hero) return;

    const updateBackground = () => {
        topbar.classList.toggle('is-past-hero', hero.getBoundingClientRect().bottom <= 0);
    };
    const updateHeight = () => {
        document.documentElement.style.setProperty('--topbar-height', `${topbar.getBoundingClientRect().height}px`);
        updateBackground();
    };

    new ResizeObserver(updateHeight).observe(topbar);
    new IntersectionObserver(updateBackground, { threshold: 0 }).observe(hero);
    window.addEventListener('pageshow', updateBackground);
    updateHeight();
})();
