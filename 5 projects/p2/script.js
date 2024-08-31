var con = document.querySelector(".container")
var i = document.querySelector("i")
con.addEventListener("dblclick",function(){
    i.style.transform = "translate(-50%,-50%) scale(2)"
    i.style.opacity = "0.8"
    setTimeout(function(){
        i.style.color = "red"
    },100)
    setTimeout(function(){
        i.style.opacity = "0"
    },1000)
})