// For header

const headerLinks = document.querySelector(".nav-bar__links");
const showHeaderLinks = () => {
    headerLinks.classList.add("nav-bar__links--active");
    document.body.style.overflow = "hidden";
}

const hideHeaderLinks = () => {
    headerLinks.classList.remove("nav-bar__links--active");
    document.body.style.overflow = "auto";
}

const headerContent = document.querySelector(".header__content");
const sliderCircles = document.querySelector(".slider__indicator").children;        
const bgImages = ["./assets/img/dark-bg-1.webp", "./assets/img/dark-bg-2.webp", "./assets/img/dark-bg-3.webp"];

(function autoSlide() {
    const slidingFrequency = 3000;
    let i = 0;

    setInterval(() => {
        headerContent.style.backgroundImage = `url(${bgImages[i]})`;

        for (let circle of sliderCircles) {
            circle.classList.remove("circle--chosen");
        }

        sliderCircles[i].classList.add("circle--chosen");

        if (i == 2)
            i = 0;
        else
            i++;
    }, slidingFrequency);
})();