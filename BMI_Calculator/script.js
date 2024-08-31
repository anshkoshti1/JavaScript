function updateHeightValue(value){
    document.getElementById("height-value").textContent = value;
}

function updateWeightValue(value){
    document.getElementById("weight-value").textContent = value;
}

function calculateBMI(){
    const height = document.getElementById("height").value
    const weight = document.getElementById("weight").value
    const age = document.getElementById("age").value
    const gender = document.querySelector("input[name='gender']:checked")

    if(!age || gender){
        alert("Please Fill in all fields.")
    }
    
    const bmi = (weight / ((height/100)**2)).toFixed(1)
    document.getElementById("bmi-result").textContent = bmi

    if(bmi<18.5){
        category = "underweight"
        document.getElementById("bmi-result").style.color = "blue"
        document.getElementById("bmi-category").style.color = "blue"
    }
    else if(bmi<24.9){
        category = "Normal Weight"
        document.getElementById("bmi-result").style.color = "green"
        document.getElementById("bmi-category").style.color = "green"
    }
    else if(bmi<29.9){
        category = "Over Weight"
        document.getElementById("bmi-result").style.color = "yellow"
        document.getElementById("bmi-category").style.color = "yellow"
    }
    else{
        category = "Obese"
        document.getElementById("bmi-result").style.color = "red"
        document.getElementById("bmi-category").style.color = "red"
    }

    document.getElementById("bmi-category").textContent = category
}