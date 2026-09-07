const toggleButton = document.getElementById("toggleButton");
let toggle = false;

toggleButton.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        toggleButton.textContent = "Toggle is On";
        document.getElementById("normalContainer").style.display = "none";
        document.getElementById("pixlContainer").style.display = "block";
    } else {
        toggleButton.textContent = "Toggle is Off";
        document.getElementById("normalContainer").style.display = "block";
        document.getElementById("pixlContainer").style.display = "none";
    };


})