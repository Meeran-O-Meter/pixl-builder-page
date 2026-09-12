const toggleButton = document.getElementById("toggleButton");
let toggle = false;

toggleButton.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        document.getElementById("normalContainer").style.display = "none";
        document.getElementById("pixlContainer").style.display = "block";
    } else {
        document.getElementById("normalContainer").style.display = "block";
        document.getElementById("pixlContainer").style.display = "none";
    };


})