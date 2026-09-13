const toggleImg = document.getElementById("toggleImg");
const toggleButton = document.getElementById("toggleButton");
let toggle = false;

toggleImg.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        document.getElementById("normalContainer").style.display = "none";
        document.getElementById("pixlContainer").style.display = "block";
        document.querySelector("link[rel='stylesheet']").setAttribute('href', './pixl-style.css')
        toggleImg.classList.add("on")
    } else {
        document.getElementById("normalContainer").style.display = "block";
        document.getElementById("pixlContainer").style.display = "none";
        document.querySelector("link[rel='stylesheet']").setAttribute('href', './style.css')
        toggleImg.classList.add("off")
    };


})