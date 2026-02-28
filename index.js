let clickButton = document.querySelector("button")
let clicks = 0
let level = 0

let clicksDisplay = document.querySelector(".points")
let levelDisplay = document.querySelector("#a")

let saveButton = document.querySelector('#saveBtn')
let loadBtn = document.querySelector('#loadBtn')

clickButton.addEventListener('click', function () {
    clicks++
    clicksDisplay.textContent = clicks

    if (clicks == 100) {
        level++
        levelDisplay.textContent = level
    }
})

saveButton.addEventListener('click', function () {
    console.log("Saving clicks:", clicks);
    localStorage.setItem("points", clicks)
})

loadBtn.addEventListener('click', function () {
    clicks = parseInt(localStorage.getItem("points")) || 0
    clicksDisplay.textContent = clicks
    console.log("Loaded clicks:", clicks)
})

   
   

