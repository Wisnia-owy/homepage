console.log("Witam cię u mnie po raz kolejny.Ten kod jest juz w repozytoriom git.")

let button = document.querySelector(".button__js-removeImage");
let image = document.querySelector(".image");

button.addEventListener("click", () => {
    image.classList.toggle("noFoto");
    button.innerText =
        image.classList.contains("noFoto")
            ? "pokaż fotkę" : "usuń fotkę";

});
let body = document.querySelector(".body");
let changeBackgroundButton = document.querySelector(".button__js-changeBackground");
let nextColorName = document.querySelector(".nextColorName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("whiteBackground");
    nextColorName.innerText =
        body.classList.contains("whiteBackground")
            ? "ciemne" : "jasne";

});