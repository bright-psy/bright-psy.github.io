function loadTranslations(lang) {
    let translations;
    if (lang === 'fr') {
        translations = fr_translations;
    } else {
        translations = en_translations;
    }
    const elements = document.querySelectorAll('[data-translation]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translation');
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
        else {
            console.warn(`Translation key "${key}" not found for language "${lang}"`);
            element.innerHTML = null;
        }
    });
}

function setLanguage(lang) {
    let previousLang = localStorage.getItem('language') || 'en';
    if (previousLang === lang) {
        return;
    }
    localStorage.setItem('language', lang);
    loadTranslations(lang);
}

const savedLang = localStorage.getItem('language') || 'en';
loadTranslations(savedLang);
