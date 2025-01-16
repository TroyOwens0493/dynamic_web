const colorSelector = document.getElementById("theme-selector");
const bodyElement = document.getElementById("body");
const logo = document.getElementById("logo");
colorSelector.addEventListener("change", () => {
    const currentTheme = bodyElement.className;
    changeTheme(currentTheme);
});

function changeTheme(currentTheme) {
    if (currentTheme == "light") {
        bodyElement.className = "dark";
        logo.src = "images/byui-logo_white.png";
    }
    else {
        bodyElement.className = "light";
        logo.src = "images/byui-logo.webp";
    }
}
