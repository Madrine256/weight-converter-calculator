"use strict"
//get the input form 

const IbsInput = document.querySelector('#ibsInput');
//now get the oupt divs
const OutClass =(outputClass) => document.querySelector(outputClass);
const kgrams = OutClass('.kgrams'),
        grams = OutClass('.grams'),
        ounces = OutClass('.oz');
    //add  event listerner to the input
    IbsInput.addEventListener('input', (e)=>{
        const numEntered = e.target.value;
            //check if the input is not just space or not anumber
        if(numEntered.trim() === "" && !Number(numEntered)){
            alert('input empty or its anumber, refresh and try again');
        }
        else{
            kgrams.innerHTML = (numEntered/2.2046).toFixed(4);
            grams.innerHTML= (numEntered/0.0022).toFixed(4);
            ounces.innerHTML= numEntered*16;
        }
            
    })