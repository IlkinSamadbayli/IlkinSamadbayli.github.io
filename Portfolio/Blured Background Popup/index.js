const backbtnEl = document.querySelector(".back-btn");
const popupcontEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const containerEl = document.querySelector(".container");

backbtnEl.addEventListener("click", () => {
    popupcontEl.classList.remove("active");
    containerEl.classList.add("active");

})

closeIconEl.addEventListener("click", () => {
    popupcontEl.classList.add("active");
    containerEl.classList.remove("active");
    console.log(at);
})