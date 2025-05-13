const scholarLogoUrl = 'https://images.icon-icons.com/2108/PNG/512/google_scholar_icon_130918.png';
const linkedinLogoUrl = 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
const githubLogoUrl = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';

document.addEventListener('DOMContentLoaded', function() {
    const teamListContainer = document.querySelector('.team-list');

    if (!teamListContainer || !teamMembers) {
        return;
    }

    teamMembers.forEach((member, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'team-card';
        cardElement.setAttribute('data-card-id', index + 1);

        cardElement.innerHTML = `
            <img class="card-img" src="${member.image || 'assets/images/default_profile.png'}" alt="${member.name || 'Team Member'}">
            <p class="card-name">${member.name || 'Name Not Available'}</p>
            <p class="card-title">${member.title || 'Position Not Available'}</p>
            <div class="card-socials">
                ${member.scholar ? `<a href="${member.scholar}" title="Google Scholar" target="_blank">
                    <img src="${scholarLogoUrl}" alt="Google Scholar">
                </a>` : ''}

                ${member.linkedin ? `<a href="${member.linkedin}" title="LinkedIn" target="_blank">
                    <img src="${linkedinLogoUrl}" alt="LinkedIn">
                </a>` : ''}

                ${member.github ? `<a href="${member.github}" title="GitHub" target="_blank">
                    <img src="${githubLogoUrl}" alt="GitHub">
                </a>` : ''}
            </div>
        `;

        teamListContainer.appendChild(cardElement);
    });
});
