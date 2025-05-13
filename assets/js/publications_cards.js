// BRIGHT Lab
// This files contains RSS parser for the publications cards

const rssUrl = "https://pubmed.ncbi.nlm.nih.gov/rss/search/1vwc2FOtmnQT3rSGIODi61RguRgefbx_huzySeAzm3-8zecElm/?limit=15&utm_campaign=pubmed-2&fc=20250509155558"


function getYear(date) {
    const year = date.split(" ")[3];
    return year;
}

function getAuthors(creators) {
    const authors = [];
    creators.forEach(creator => {
        const author = creator.textContent;
        authors.push(author);
    });
    return authors;
}

function getDoi(identifiers) {
    const doiIdentifier = Array.from(identifiers).find(identifier => {
        const id = identifier.textContent;
        return id.includes("doi:");
    });

    return doiIdentifier ? doiIdentifier.textContent : null;
}

async function readRss() {
    const response = await fetch(rssUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    const items = xml.querySelectorAll("item");
    return items;
}

async function getLatestPublications() {
    const items = await readRss();
    const publications = [];
    items.forEach(item => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;
        const date = getYear(item.querySelector("pubDate").textContent);
        const description = item.querySelector("description").textContent;
        const source = item.querySelector("source").textContent;
        const authors = getAuthors(item.querySelectorAll("creator"));
        const doi = getDoi(item.querySelectorAll("identifier"));

        const publication = {
        title: title,
        link: link,
        date: date,
        description: description,
        source: source,
        authors: authors,
        doi: doi
        };

        publications.push(publication);
    });
    return publications;
}

function formatAuthors(authorsArray) {
    if (!authorsArray || authorsArray.length === 0) return '';
    if (authorsArray.length > 7) {
        return `${authorsArray[0]} et al.`;
    }
    return authorsArray.join(', ');
}

function formatJournal(journal) {
    if (!journal) return '';
    return journal.split(' : ')[0];
}

function createPublicationCards() {
    const publicationsList = document.querySelector('.publications-list');

    if (publicationsList) {
        publicationsList.innerHTML = '';

        getLatestPublications().then(publications => {
            publications.forEach((pub, index) => {
                const card = document.createElement('div');
                card.className = 'publication-card';
                card.setAttribute('data-card-id', index);

                const title = document.createElement('p');
                title.className = 'publication-title';
                title.textContent = pub.title;

                const separator = document.createElement('span');
                separator.className = 'pub-sep';

                const authors = document.createElement('p');
                authors.className = 'publication-authors';
                authors.textContent = formatAuthors(pub.authors);

                const sourceDiv = document.createElement('div');
                sourceDiv.className = 'pub-source';

                const journal = document.createElement('span');
                journal.className = 'publication-journal';
                journal.textContent = formatJournal(pub.source);

                sourceDiv.appendChild(journal);
                sourceDiv.appendChild(document.createTextNode(' - '));

                const year = document.createElement('span');
                year.className = 'publication-year';
                year.textContent = pub.date;

                sourceDiv.appendChild(year);

                card.appendChild(title);
                card.appendChild(separator);
                card.appendChild(authors);
                card.appendChild(sourceDiv);


                publicationsList.appendChild(card);
            });

            if (typeof initPublicationCarousel === 'function') {
                initPublicationCarousel();
            }
        }).catch(error => {
            console.error('Error while getting publications:', error);
        });
    }
}

document.addEventListener('DOMContentLoaded', createPublicationCards);
