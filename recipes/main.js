import recipes from './recipes.mjs';

const getRandomItemFromArr = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const addTags = (tags, template) => {
    const tagsHTML = tags.map(tag => `<p class="tag">${tag}</p>`).join('');
    return template.replace('<div class="tags">', `<div class="tags">${tagsHTML}`);
};

const addStars = (stars, template) => {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            starsHTML += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            starsHTML += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    return template.replace(
        /<span class="rating" role="img" aria-label="Rating: \d+ out of 5 stars">(.*?)<\/span>/s,
        `<span class="rating" role="img" aria-label="Rating: ${stars} out of 5 stars">${starsHTML}</span>`
    );
};

const buildRecipeHTML = (recipe) => {
    let template = `
        <div class="recipe">
            <img class="picture-of-the-food" src="${recipe.image}" alt="Picture of the ${recipe.name}">
            <div class="info">
                <div class="tags">
                </div>
                <h2 class="name">${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                </span>
                <p class="desc">${recipe.description}</p>
            </div>
        </div>
    `;
    template = addTags(recipe.tags, template);
    template = addStars(recipe.rating, template);
    return template;
};

function renderRecipes(recipeList) {
    const recipeTarget = document.getElementById("recipe-container");
    recipeTarget.innerHTML = "";

    if (recipeList.length === 0) {
        recipeTarget.innerHTML = "<p class='no-results'>No recipes found. Try a different search term.</p>";
        return;
    }

    recipeList.forEach(recipe => {
        recipeTarget.innerHTML += buildRecipeHTML(recipe);
    });
}

function init() {
    const recipe = getRandomItemFromArr(recipes);
    renderRecipes([recipe]);
}

const filterRecipes = (query) => {
    if (!query.trim()) {
        return recipes;
    }

    let filteredRecipes = [];
    query = query.toLowerCase();

    recipes.forEach(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);

        const descMatch = recipe.description.toLowerCase().includes(query);

        const tagsMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));

        const ingredientsMatch = recipe.recipeIngredient.some(ingredient =>
            ingredient.toLowerCase().includes(query)
        );

        if (nameMatch || descMatch || tagsMatch || ingredientsMatch) {
            filteredRecipes.push(recipe);
        }
    });

    return filteredRecipes;
};

const filterHandler = () => {
    const textBox = document.getElementById("search-box");
    let query = textBox.value;

    const matches = filterRecipes(query);

    renderRecipes(matches);
};

const searchButton = document.getElementById("search-button");
searchButton.addEventListener('click', filterHandler);

const searchBox = document.getElementById("search-box");
searchBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        filterHandler();
    }
});

init();
