const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const imagesLen = images.length;
const bgRan = Math.floor(Math.random() * imagesLen);
const chosenImage = images[bgRan];

const bgImage = document.createElement("img");
bgImage.setAttribute("id", "bg-img");
bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);
