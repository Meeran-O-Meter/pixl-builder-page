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