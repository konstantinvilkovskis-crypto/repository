let clickButton = document.querySelector("button")
let clicks = 0
let level = 0
let pointsTillUpgrade = 100

let clicksDisplay = document.querySelector(".points")
let levelDisplay = document.querySelector("#level")

let saveButton = document.querySelector('#saveBtn')
let loadBtn = document.querySelector('#loadBtn')

clickButton.addEventListener('click', function () {
    clicks++
    clicksDisplay.textContent = clicks
    console.log(pointsTillUpgrade)

    if (clicks > pointsTillUpgrade) {
        level++
        levelDisplay.textContent = level
        pointsTillUpgrade = pointsTillUpgrade + 100
        console.log(pointsTillUpgrade)
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

   
   

