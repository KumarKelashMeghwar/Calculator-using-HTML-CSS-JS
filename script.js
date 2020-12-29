/*Starting with the name of God who is most merciful and powerful*/

const numberButtons = document.querySelectorAll(".number-btn");
const operationButtons = document.querySelectorAll(".operation-btn");
const largeScreen = document.querySelector(".screen2");
const smallScreen = document.querySelector(".screen1");
const equalButton = document.querySelector("#equal-btn");
const deleteButton = document.querySelector("#delete-btn");
const allClearButton = document.querySelector("#allClear-btn");


// Variables declared and defined;
let text = "", textStored = "", total = "";
let array = [];

allClearButton.addEventListener("click", ()=>{
    largeScreen.innerHTML = "";
    smallScreen.innerHTML = "";
});


for(let btn of numberButtons){
    btn.addEventListener("click", ()=>{

        if(btn.innerHTML === "."){
            if(largeScreen.innerHTML.includes(".")){
                //
            }
            else{
               largeScreen.innerHTML += decimalPoint.innerHTML;
            }  
        }

        else{
            text = btn.innerHTML;
            largeScreen.innerHTML += text;
            array = Array.from(String(largeScreen.innerHTML),String);
        }
    });
}


for(let btn of operationButtons){
    btn.addEventListener("click", ()=>{

        
        if(smallScreen.innerHTML !== ""){
            //
        }
        else if(largeScreen.innerHTML == ""){
           //
        }
        else{
            textStored = largeScreen.innerHTML;
            smallScreen.innerHTML = textStored + btn.innerHTML;
            largeScreen.innerHTML = "";
        }
        
    });
}

equalButton.addEventListener("click", ()=>{
    total =  smallScreen.innerHTML + largeScreen.innerHTML;
    largeScreen.innerHTML =  eval(total);
    smallScreen.innerHTML = "";
});


deleteButton.addEventListener("click", ()=>{
    array.pop();
    let tempText = array.join("");
    largeScreen.innerHTML = tempText;
});

