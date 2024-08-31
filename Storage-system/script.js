const addbtn = document.getElementById("addItem");
const removebtn = document.getElementById("removeItem");
var itemCounter = document.getElementById("itemCount");

let count = 0;

function updateItemCount(){
    itemCounter.textContent = count;
}

addbtn.addEventListener("click",()=>{
    count++;
    updateItemCount();
})

removebtn.addEventListener("click",()=>{
    if(count>0){
        count--;
    }
    updateItemCount();
})