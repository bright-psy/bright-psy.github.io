
let modal, modalContent, modalTitle, modalAuthors, modalJournal, modalYear, modalDoi, modalLink, modalAbstract;

document.addEventListener('DOMContentLoaded', function() {
    initPublicationModal();
});

function formatCompleteAuthors(authors) {
    if (!authors || authors.length === 0) {
        return '';
    }
    return authors.join(', ');
}

function openModal(card) {
    const cardId = card.getAttribute('data-card-id');

    getLatestPublications().then(publications => {
        const publication = publications[cardId];

        if (publication) {
            modalTitle.textContent = publication.title;
            modalAuthors.textContent = formatCompleteAuthors(publication.authors);
            modalJournal.textContent = formatJournal(publication.source);
            modalYear.textContent = publication.date;

            if (publication.doi) {
                modalDoi.innerHTML = `<a href="https://doi.org/${publication.doi.replace('doi:', '')}" target="_blank">DOI</a>`;
            } else {
                modalDoi.textContent = '';
            }

            modalLink.innerHTML = `<a href="${publication.link}" target="_blank">PubMed</a>`;
            modalAbstract.textContent = publication.description;


            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
}

function initPublicationModal() {
    modal = document.querySelector('.publication-modal');
    modalContent = modal.querySelector('.publication-modal-content');
    modalTitle = modal.querySelector('.modal-pub-title');
    modalAuthors = modal.querySelector('.modal-pub-authors');
    modalJournal = modal.querySelector('.modal-pub-journal');
    modalYear = modal.querySelector('.modal-pub-year');
    modalDoi = modal.querySelector('.modal-pub-doi');
    modalLink = modal.querySelector('.modal-pub-link');
    modalAbstract = modal.querySelector('.modal-pub-abstract');

    if (!modal.querySelector('.close-button')) {
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        modalContent.appendChild(closeButton);
    }

    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target.classList.contains('close-button')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeModal = closeModal;
