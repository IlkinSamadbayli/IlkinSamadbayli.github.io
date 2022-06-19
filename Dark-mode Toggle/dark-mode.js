const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");

inputEl.checked = localStorage.getItem("mode");

console.log(inputEl.checked);

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", () => {
    updateLocalStorage();
    updateBody();
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}