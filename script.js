{
    const welcome = () => {
    console.log("Witam cię u mnie po raz kolejny.Ten kod jest juz w repozytoriom git drugi raz.")

}

const toggleBackground = () => {
    const body = document.querySelector(".body");
    const nextColorName = document.querySelector(".nextColorName");
    body.classList.toggle("whiteBackground");
    nextColorName.innerText =
        body.classList.contains("whiteBackground")
            ? "ciemne" : "jasne";

};

const init = () => {
    
const changeBackgroundButton = document.querySelector(".button__js-changeBackground");


changeBackgroundButton.addEventListener("click", toggleBackground );
welcome();
};

init();


let button = document.querySelector(".button__js-removeImage");
let image = document.querySelector(".image");

button.addEventListener("click", () => {
    image.classList.toggle("noFoto");
    button.innerText =
        image.classList.contains("noFoto")
            ? "pokaż fotkę" : "usuń fotkę";

});
 

 }