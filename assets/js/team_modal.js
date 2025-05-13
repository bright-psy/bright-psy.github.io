document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelectorAll('.team-card');
    const modal = document.querySelector('.card-details-modal');
    const closeButton = document.querySelector('.close-button');

    function openModal(event) {
        let targetElement = event.target;
        while (targetElement != null && targetElement !== this) {
            if (targetElement.tagName === 'A' || targetElement.closest('.card-socials')) {
                return;
            }
            targetElement = targetElement.parentNode;
        }
        event.preventDefault();

        const cardId = parseInt(this.getAttribute('data-card-id')) - 1;

        if (cardId >= 0 && cardId < teamMembers.length) {
            const member = teamMembers[cardId];
            selectedLang = localStorage.getItem('language') || 'en';
            console.debug("Selected language:", selectedLang);
            modal.querySelector('.modal-img').src = member.photo || this.querySelector('.card-img').src;
            modal.querySelector('.modal-title').textContent = member.name || this.querySelector('.card-name').textContent;
            modal.querySelector('.modal-subtitle').textContent = member.title || this.querySelector('.card-title').textContent;
            console.debug("Member bio:", member.bio);
            console.debug("Member bio selectedLang:", member.bio[selectedLang]);
            console.debug("BOOLEAN", member.bio && member.bio[selectedLang]);
            if (member.bio && member.bio[selectedLang]) {
                modal.querySelector('.modal-description').innerHTML = member.bio[selectedLang];
            } else {
                console.warn("La langue sélectionnée n'est pas disponible dans l'objet bio pour le membre:", member.name);
                modal.querySelector('.modal-description').innerHTML = null;
            }

            modal.style.display = 'flex';
        } else {
            console.error("Membre d'équipe non trouvé dans teamMembers pour l'ID:", cardId + 1);
        }
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    teamCards.forEach(card => {
        card.removeAttribute('onclick');
        card.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});
