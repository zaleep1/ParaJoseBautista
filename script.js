const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");
const finalImg = document.getElementById("final-img");
const music = document.getElementById("music");

const clickSound = new Audio("assets/click.mp3");

noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

noButton.addEventListener("click", () => clickSound.play());
yesButton.addEventListener("click", function() {
    clickSound.play();
    message.classList.remove("hidden");
    finalImg.classList.remove("hidden");
    yesButton.style.display = "none";
    noButton.style.display = "none";
});
