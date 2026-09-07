// Darken the hero image and introduction beneath a scroll-controlled overlay.
(() => {
    const topbar = document.querySelector('.site-topbar');
    const hero = document.querySelector('.amazon-hero');
    const intro = document.querySelector('.amazon-hero-content');
    if (!topbar || !hero || !intro) return;

    const updateScroll = () => {
        const topbarProgress = Math.max(0, Math.min(1, window.scrollY / 180));
        topbar.style.setProperty('--topbar-surface-opacity', String(topbarProgress));
        topbar.style.setProperty('--topbar-blur', `${2 + 10 * topbarProgress}px`);
        topbar.classList.toggle('is-over-content', hero.getBoundingClientRect().bottom <= topbar.getBoundingClientRect().bottom);
        const scrollDistance = Math.max(700, hero.offsetHeight) / 1.155;
        const progress = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / scrollDistance));
        hero.style.setProperty('--hero-shade-opacity', String(0.95 * progress));
    };
    const updateHeight = () => {
        document.documentElement.style.setProperty('--topbar-height', `${topbar.getBoundingClientRect().bottom}px`);
        updateScroll();
    };

    new ResizeObserver(updateHeight).observe(topbar);
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateHeight);
    window.addEventListener('pageshow', updateScroll);
    document.fonts.ready.then(updateHeight);
    updateHeight();
})();
