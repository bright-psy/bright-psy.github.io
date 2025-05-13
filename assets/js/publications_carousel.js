document.addEventListener('DOMContentLoaded', function() {
    initPublicationCarousel();
});

function initPublicationCarousel() {
    const carousel = document.querySelector('.publications-carousel');
    const cardsList = document.querySelector('.publications-list');
    const cards = document.querySelectorAll('.publication-card');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');

    let currentIndex = 0;
    const totalCards = cards.length;

    positionCards();

    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);

    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (this.classList.contains('prev')) {
                showPrevCard();
            } else if (this.classList.contains('next')) {
                showNextCard();
            } else if (this.classList.contains('active')) {
                openModal(this);
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') showPrevCard();
        if (e.key === 'ArrowRight') showNextCard();
    });

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) showNextCard();
        if (touchEndX > touchStartX + 50) showPrevCard();
    }

    function positionCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');

            let position = (index - currentIndex) % totalCards;
            if (position < 0) position += totalCards;

            const angle = 360 / totalCards * position;
            const radius = carousel.clientWidth * 0.4;

            const separator = card.querySelector('.pub-sep');
            const authors = card.querySelector('.publication-authors');
            const source = card.querySelector('.pub-source');
            const title = card.querySelector('.publication-title');

            if (position === 0) {
                card.classList.add('active');
                card.style.transform = 'translateX(-50%) translateY(-50%) scale(1.2)';
                card.style.zIndex = '10';
                card.style.left = '50%';
                card.style.opacity = '1';

                if (title) {
                    title.style.display = '';
                    title.style.height = '';
                    title.style.justifyContent = '';
                    title.style.alignItems = '';
                }

                if (separator) separator.style.display = 'block';
                if (authors) authors.style.display = 'block';
                if (source) source.style.display = 'block';
            } else if (position === 1 || position === totalCards - 1) {
                card.classList.add(position === 1 ? 'next' : 'prev');
                const xPos = position === 1 ? '75%' : '25%';
                card.style.zIndex = '5';
                card.style.left = xPos;
                card.style.transform = 'translateX(-50%) translateY(-50%) scale(0.8)';
                card.style.opacity = '0.7';

                if (title) {
                    title.style.display = 'flex';
                    title.style.height = '100%';
                    title.style.justifyContent = 'center';
                    title.style.alignItems = 'center';
                    title.style.textAlign = 'center';
                }

                if (separator) separator.style.display = 'none';
                if (authors) authors.style.display = 'none';
                if (source) source.style.display = 'none';
            } else {
                card.style.opacity = '0';
                card.style.zIndex = '0';
                card.style.transform = 'translateX(-50%) translateY(-50%) scale(0.5)';
            }
        });
    }

    function showPrevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        positionCards();
    }

    function showNextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        positionCards();
    }

    let autoRotate = setInterval(showNextCard, 5000);

    carousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
    carousel.addEventListener('mouseleave', () => autoRotate = setInterval(showNextCard, 5000));
}
