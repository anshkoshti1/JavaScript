var stng = document.querySelector("h5")
var addFnd = document.getElementById("add")
// var removeFnd = document.getElementById("remove")
var flag = 0

addFnd.addEventListener("click",function(){
    if(flag == 0){
        stng.innerHTML = "Friends"
        stng.style.color = "green"
        addFnd.innerHTML = "Remove"
        flag = 1
    }
    else{
        stng.innerHTML = "Stranger"
        stng.style.color = "red"
        addFnd.innerHTML = "Add Friend"
        flag = 0
    }
})

// removeFnd.addEventListener("click",function(){
//     stng.innerHTML = "Stranger"
//     stng.style.color = "green"
// })