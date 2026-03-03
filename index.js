let clickButton = document.querySelector("button")
let clicks = 0
let level = 0
let pointsTillUpgrade = 100
let clickPower = 1
let clickPriceInlet = 60

let clicksDisplay = document.querySelector(".points")
let levelDisplay = document.querySelector("#level")
let upgradeBtn = document.querySelector('#buyUpgrade')
let clickPrice = document.querySelector('#clickPrice')

let saveButton = document.querySelector('#saveBtn')
let loadBtn = document.querySelector('#loadBtn')

clickButton.addEventListener('click', function () {
    clicks += clickPower
    clicksDisplay.textContent = clicks

    if (clicks > pointsTillUpgrade) {
        level++
        levelDisplay.textContent = level
        pointsTillUpgrade += 100
    }
})

upgradeBtn.addEventListener('click', function() {
    if (clicks >= clickPriceInlet) {
        clicks = clicks - clickPriceInlet
        clicksDisplay.textContent = clicks

        clickPower = clickPower + 1
        clickPriceInlet = clickPriceInlet * 2
        clickPrice.textContent = clickPriceInlet
    } else {
        alert("Not enough clicks!")
    }
})

saveButton.addEventListener('click', function () {
    localStorage.setItem("points", clicks)
    localStorage.setItem("level", level)
    localStorage.setItem("pointsTillUpgrade", pointsTillUpgrade)
    localStorage.setItem("clickPower", clickPower)
    localStorage.setItem("clickPriceInlet", clickPriceInlet)
})

loadBtn.addEventListener('click', function () {
    clicks = parseInt(localStorage.getItem("points")) || 0
    level = parseInt(localStorage.getItem("level")) || 0
    pointsTillUpgrade = parseInt(localStorage.getItem("pointsTillUpgrade")) || 100
    clickPower = parseInt(localStorage.getItem("clickPower")) || 1
    clickPriceInlet = parseInt(localStorage.getItem("clickPriceInlet")) || 10

    clicksDisplay.textContent = clicks
    levelDisplay.textContent = level
    clickPrice.textContent = clickPriceInlet
})('#loadBtn')

clickButton.addEventListener('click', function () {
    clicks = clicks + clickPower
    clicksDisplay.textContent = clicks
    console.log(pointsTillUpgrade)

    if (clicks > pointsTillUpgrade) {
        level++
        levelDisplay.textContent = level
        pointsTillUpgrade = pointsTillUpgrade + 100
        console.log(pointsTillUpgrade)
    }
})

upgradeBtn.addEventListener('click', function() {
    if (clicks >= clickPriceInlet) {  // ✅ используем clicks
        clicks = clicks - clickPriceInlet;
        clicksDisplay.textContent = clicks;

        clickPower = clickPower + 1;
        clickPriceInlet = clickPriceInlet * 2;
        clickPrice.textContent = clickPriceInlet;
    } else {
        alert("Not enough clicks!");
    }
});

saveButton.addEventListener('click', function () {
    console.log("Saving clicks:", clicks);
    localStorage.setItem("points", clicks)
    localStorage.setItem("level", level)
    localStorage.setItem("pointsTillUpgrade", pointsTillUpgrade)
})

loadBtn.addEventListener('click', function () {
    clicks = parseInt(localStorage.getItem("points")) || 0
    level = parseInt(localStorage.getItem("level")) || 0
    pointsTillUpgrade = parseInt(localStorage.getItem("pointsTillUpgrade")) || 0
    clicksDisplay.textContent = clicks
    levelDisplay.textContent = level
    console.log("Loaded clicks:", clicks)
})

   
   

