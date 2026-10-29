
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const finalText = document.getElementById("final-text");
const music = document.getElementById("bgMusic");
const button = document.getElementById("musicButton");

    button.addEventListener("click", function () {
        music.play();
        button.textContent = "♫ ";
    });

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    yesBtn.style.display = "none";

    title.textContent = "Yuppiee(˶ᵔ ᵕ ᵔ˶)";

    catImg.src = "nada 2.jpeg";

    finalText.style.display = "block";

    document.querySelector(".letter-window").classList.add("final");
});
