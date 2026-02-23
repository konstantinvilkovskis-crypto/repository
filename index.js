let a = document.querySelector("button")
let b = 0
let c = document.querySelector(".points")
a.addEventListener('click',function(){
    b++
    c.textContent = b;
})



