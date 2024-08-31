const randomNum1 = Math.floor((Math.random()* 6)+1);
const randomNum2 = Math.floor((Math.random()* 6)+1);
var diceImg1 = "img/d"+randomNum1+".png";
var diceImg2 = "img/d"+randomNum2+".png";
const elem =document.getElementById("dgame");


    function roll(){
            const changeSrc1 = document.getElementById("p1");
            changeSrc1.setAttribute("src", diceImg1);
            const changeSrc2 = document.getElementById("p2");
            changeSrc2.setAttribute("src", diceImg2);
            flag = 1
            if(randomNum1>randomNum2){
                elem.innerHTML = "Left won🥳 "
            }else if(randomNum2>randomNum1){
                elem.innerHTML = "Right won🥳 "
            }
            else{
                elem.innerHTML = "Draw "
            }
    }
