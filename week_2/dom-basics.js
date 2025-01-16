const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200";
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const htmlForsection = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
const newSection = document.createElement("section");
newSection.innerHTML = htmlForsection;
document.body.appendChild(newSection);
