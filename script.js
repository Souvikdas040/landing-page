let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let links = document.querySelector('#links');

const hamburgerEvent = (navigation, close, open) => {
    links.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));