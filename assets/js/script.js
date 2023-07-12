
let button = document.getElementById("roadmap")
let popup = document.getElementById("popup")

button.addEventListener("click", function() {
    popup.style.display = "block"
})

let closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", function() {
    popup.style.display = "none"
})


