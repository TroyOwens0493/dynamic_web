import colorschemes from './data.mjs';

const getRandomItemFromArr = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const addTags = (tags) => {
    return tags.map(tag => `<p class="tag">${tag}</p>`).join('');
};

const buildColorschemeHTML = (colorscheme) => {
    return `
        <div class="colorscheme">
            <img class="picture-of-the-colorscheme" 
                src="${colorscheme.previewImage}" 
                alt="Picture of ${colorscheme.name}"
                width="350" height="auto">
            <div class="info">
                <h2 class="name">${colorscheme.name}</h2>
                <div class="tags">
                    ${addTags(colorscheme.tags)}
                </div>
                <p class="desc">${colorscheme.description}</p>
                <p class="author">${colorscheme.author}</p>
                <a class="link" href="${colorscheme.url}" target="_blank">Get it here!</a>
            </div>
        </div>
    `;
};

function renderColorschemes(colorschemeList) {
    const colorschemeTarget = document.getElementById("colorscheme-container");

    if (colorschemeList.length === 0) {
        colorschemeTarget.innerHTML = "<p class='no-results'>No color schemes found. Try a different search term.</p>";
        return;
    }

    // Build all HTML before inserting to avoid multiple reflows
    const allColorschemeHTML = colorschemeList.map(colorscheme =>
        buildColorschemeHTML(colorscheme)
    ).join('');

    colorschemeTarget.innerHTML = allColorschemeHTML;
}

const filterColorschemes = (query) => {
    if (!query.trim()) {
        return colorschemes;
    }

    query = query.toLowerCase();
    return colorschemes.filter(colorscheme => {
        const nameMatch = colorscheme.name.toLowerCase().includes(query);
        const descMatch = colorscheme.description.toLowerCase().includes(query);
        const tagsMatch = colorscheme.tags.some(tag => tag.toLowerCase().includes(query));
        return nameMatch || descMatch || tagsMatch;
    });
};

const filterHandler = () => {
    const textBox = document.getElementById("search-box");
    let query = textBox.value;
    const matches = filterColorschemes(query);
    renderColorschemes(matches);
};

function setDarkModeButtonText(isDarkMode) {
    const button = document.getElementById('dark-mode-toggle');
    button.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Store the user's preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    setDarkModeButtonText(isDarkMode);
}

function applyDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    setDarkModeButtonText(isDarkMode);
}

function init() {
    // Set up event listeners
    const searchButton = document.getElementById("search-button");
    if (searchButton) {
        searchButton.addEventListener('click', filterHandler);
    }

    const searchBox = document.getElementById("search-box");
    if (searchBox) {
        searchBox.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                filterHandler();
            }
        });
    }

    const darkModeButton = document.getElementById('dark-mode-toggle');
    darkModeButton.addEventListener('click', toggleDarkMode);

    // Apply saved dark mode preference on page load
    applyDarkModePreference();

    // Render a random colorscheme
    const colorscheme = getRandomItemFromArr(colorschemes);
    renderColorschemes([colorscheme]);
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
