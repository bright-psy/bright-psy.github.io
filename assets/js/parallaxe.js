document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const content = document.querySelector('.content');

    function adjustBackgroundSize() {
        const contentHeight = content.offsetHeight;
        const windowHeight = window.innerHeight;
        const heightNeeded = Math.max(contentHeight, windowHeight);
        parallaxBg.style.height = heightNeeded + 500 + 'px';
    }

    window.addEventListener('scroll', function() {
        const scrollY = -window.scrollY / 4;
        parallaxBg.style.transform = `translateY(${scrollY}px)`;
    });

    window.addEventListener('resize', adjustBackgroundSize);
    adjustBackgroundSize();
});
