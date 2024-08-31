var con = document.querySelector(".container")
var crsr = document.querySelector("#cursor")

con.addEventListener("mousemove",function(details){
    crsr.style.left = details.x + "px"
    crsr.style.top = details.y + "px"
})