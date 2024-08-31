const btnEl = document.getElementById("btn")
const appEl = document.getElementById("App")


var move = false
var clk = document.querySelector("p")
clk.addEventListener("dblclick",function(){
    clk.innerHTML = "(Easter Egg: Double Click on the Notes App)"
    move = true
})
clk.addEventListener("mouseleave",function(){
    clk.innerHTML = "(Double click to delete it.)"
})

var flag = 0
var dblclk = document.querySelector("h1")
dblclk.addEventListener("dblclick",function(){
    if(move){
        if(flag==0){
            dblclk.innerHTML = "Jay Gay"
            flag = 1
        }
        else if(flag==1){
            dblclk.innerHTML = "Vinit Gay"
            flag = 2
        }
        else if(flag==2){
            dblclk.innerHTML = "Mann Gay"
            flag = 3
        }
        else if(flag==3){
            dblclk.innerHTML = "Preet Gay"
            flag = 4
        }
        else {
            dblclk.innerHTML = "Notes App"
            flag = 0
        }
    }
})


getNote().forEach((note)=>{
    const noteEl = createNoteEl(note.id, note.content)
    appEl.insertBefore(noteEl,btnEl)
})

function createNoteEl(id,content){
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content

    element.addEventListener("dblclick",()=>{
        const warning = confirm("Do you want to delete this Note?")
        if(warning){
            deleteNote(id,element)
        }
    })

    element.addEventListener("input",()=>{
        updateNote(id,element.value)
    })

    return element
}

function deleteNote(id,element){
    notes = getNote().filter((note)=>note.id!=id)
    saveNote(notes)
    appEl.removeChild(element)
}

function updateNote(id,content){
    const notes = getNote()
    const target = notes.filter((note)=>note.id==id)[0]
    target.content = content
    saveNote(notes)
}

function addNote(){

    const notes = getNote()

    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    }

    const noteEl = createNoteEl(noteObj.id,noteObj.content)
    appEl.insertBefore(noteEl,btnEl)
    notes.push(noteObj)

    saveNote(notes)
}

function saveNote(notes){
    localStorage.setItem("note-app",JSON.stringify(notes))
}

function getNote(){
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}


btnEl.addEventListener("click",addNote)