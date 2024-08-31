const passwordBox = document.getElementById("password")
const btn = document.getElementById("btn")
const copy = document.getElementById("copy")

const generatePassword = ()=>{
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$+-*\/'
    let pass = ''
    
        for(let i=1; i<=10; i++){
            let char = Math.floor(Math.random()* str.length + 1)
            pass += str.charAt(char)
        }
        passwordBox.value = pass
}


btn.addEventListener("click",generatePassword)

copy.addEventListener("click",()=>{
    const passCopy = passwordBox.value.trim()
    if(!passCopy){
        alert("No Password to copy! Please generate a password.")
        return
    }

    navigator.clipboard.writeText(passCopy).then(()=>{
        alert("Password copied to clipboard!")
    })
})