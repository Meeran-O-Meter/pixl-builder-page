const toggleButton = document.getElementById("toggleButton");
const originalWindow = document.getElementById("windowOne");
const pixlWindow = document.getElementById("pixlWindow");

const originalStyle = document.getElementById("originalStyleSheet");
const pixlStyle = document.getElementById("pixlStyleSheet");
let pixlMode = false;

toggleButton.addEventListener("click", () => {
    pixlMode = !pixlMode

    originalStyle.disabled = pixlMode;
    pixlStyle.disabled = !pixlMode;

    originalWindow.hidden = pixlMode;
    pixlWindow.hidden = !pixlMode;
    pixlWindow.inert = !pixlMode;

    toggleButton.classList.toggle("pixl-enabled", pixlMode)

})

let thanksSent = Number(localStorage.getItem("thanksSent")) || 0;
const thanksButton = document.getElementById("thanksButton");
const thanksText = document.getElementById("thanksText");
thanksText.textContent = thanksSent + " thanks sent so far";

thanksButton.addEventListener("click", () => {
    thanksSent += 1;
    thanksText.textContent = thanksSent + " thanks sent so far";
    localStorage.setItem("thanksSent", thanksSent);
});

const contactForm = document.getElementById("contactForm");
const roryDiv = document.getElementById("roryDiv");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {Accept: "application/json"}
    });
    if (response.ok){
        roryDiv.style.display = "block";
        contactForm.reset();
    };
});