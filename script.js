const toggleImg = document.getElementById("toggleImg");
const toggleButton = document.getElementById("toggleButton");
let toggle = false;

toggleImg.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        document.getElementById("normalContainer").style.display = "none";
        document.getElementById("pixlContainer").style.display = "block";
        document.querySelector("link[rel='stylesheet']").setAttribute('href', './pixl-style.css')
    } else {
        document.getElementById("normalContainer").style.display = "block";
        document.getElementById("pixlContainer").style.display = "none";
        toggleImg.classList.remove("active")
        toggleButton.classList.remove("active")
        document.querySelector("link[rel='stylesheet']").setAttribute('href', './style.css')
    };


})