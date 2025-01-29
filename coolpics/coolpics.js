const menuButton = document.getElementsByClassName("menu-button")[0];
const nav = document.getElementById('expandable-nav');
const body = document.getElementsByTagName('body')[0];
const gallery = document.getElementsByClassName('gallery')[0];

menuButton.addEventListener('click', function() {
    nav.classList.toggle('hide');
});

const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1000) {
        nav.classList.remove("hide");
    } else {
        nav.classList.add("hide");
    }
};

handleResize();
window.addEventListener('resize', handleResize);

const viewerTemplate = (pic, alt) => {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img class="viewer-img" src="${pic}" alt="${alt}">
    </div>`
}

const closeViewer = () => {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

const viewHandler = (event) => {
    const clickedElement = event.target;
    const picSrc = clickedElement.src.split("-");
    const imgFileName = picSrc[0] + "-full.jpeg";

    body.insertAdjacentHTML("afterbegin", viewerTemplate(imgFileName, 'picture'));

    const closeButton = document.getElementsByClassName('close-viewer')[0];
    closeButton.addEventListener('click', closeViewer);
}

gallery.addEventListener('click', viewHandler);
