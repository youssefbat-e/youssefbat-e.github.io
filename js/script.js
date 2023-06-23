window.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background-animation");
    const gradient = "linear-gradient(to bottom, var(--my-red-bright), var(--my-dark-purple))";

    let position = 0;

    function animateBackground() {
        position -= 1;

        background.style.backgroundImage = `${gradient}, linear-gradient(to bottom, var(--my-red-bright), var(--my-dark-purple))`;
        background.style.backgroundPosition = `0% ${position}%`;

        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});
