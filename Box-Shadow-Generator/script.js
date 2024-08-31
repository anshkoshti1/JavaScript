const elem = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".functions input");

sliders.forEach((slider)=> slider.addEventListener("input",generateShadow));

function generateShadow(){
    const shadowParms = getshadowParms();
    const boxShadow = createBoxShadow(...shadowParms);
    applyShadow(elem,boxShadow);
    updateCode(boxShadow);
}

function getshadowParms(){
    const hshadow = parseInt(document.getElementById("hshadow").value);
    const vshadow = parseInt(document.getElementById("vshadow").value);
    const bradius = parseInt(document.getElementById("bradius").value);
    const sradius = parseInt(document.getElementById("sradius").value);
    const scolor = document.getElementById("scolor").value;
    const sco = parseFloat(document.getElementById("sco").value).toFixed(1);
    const ishadow = document.getElementById("ishadow").checked;

    return[hshadow,vshadow,bradius,sradius,scolor,sco,ishadow];
}

function createBoxShadow(hshadow,vshadow,bradius,sradius,scolor,sco,ishadow){
    const shadow = ishadow ? "insert" : "";
    const rgbaColor = hexToRgba(scolor,sco);

    return `${shadow} ${hshadow}px ${vshadow}px ${bradius}px ${sradius}px
    ${rgbaColor}`;
}

function hexToRgba(scolor,sco){
    const r = parseInt(scolor.substr(1,2), 16);
    const g = parseInt(scolor.substr(3,2), 16);
    const b = parseInt(scolor.substr(5,2), 16);

    return `rgba(${r},${g},${b},${sco})`;
}

function applyShadow(element,boxShadow){
    element.style.boxShadow = boxShadow;
}

function updateCode(text){
    code.textContent = `Box-Shadow: ${text}`;
}

function copyCode(){
    const codeText = code.textContent;
    navigator.clipboard.writeText(codeText).then(()=>{
        alert("Code Copied!")
    })
}

window.onload = generateShadow;