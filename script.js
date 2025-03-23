const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const finalImg = document.getElementById("final-img");
const clickSound = document.getElementById("click-sound");

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

setInterval(moveNoButton, 1000); // Se mueve cada segundo

noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);

yesButton.addEventListener("click", () => {
    clickSound.play();
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("pregunta-img").style.display = "none";
    finalImg.classList.add("animate");
    finalImg.classList.remove("hidden");
});
