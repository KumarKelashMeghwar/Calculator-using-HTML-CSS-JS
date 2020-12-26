const input = document.querySelector(".Input");
const buttons = document.querySelectorAll(".btn");
const deleteBtn = document.querySelector(".btnDel");
const clearBtn = document.querySelector(".btnC");


let  arr,number1,number2,char;

function reset(){
    input.innerHTML = "";
}

buttons.forEach((item) =>{
    item.addEventListener("click", () =>{
        
        input.innerHTML += item.innerHTML;

        arr = Array.from(String(input.innerHTML),String);

    });
});

const butns = document.querySelectorAll(".Butn");

butns.forEach((item)=>{
    item.addEventListener("click",()=>{

        if(item.innerHTML=="+"){
            number1 = Number.parseFloat(input.innerHTML);
            char = '+';
            reset();
        }

        if(item.innerHTML == "-"){
            number1 = Number.parseFloat(input.innerHTML);
            char = '-';
            reset();
        }

        if(item.innerHTML == '*'){
            number1 = Number.parseFloat(input.innerHTML);
            char = '*';
            reset();
        }

        if(item.innerHTML == '/'){
            number1 = Number.parseFloat(input.innerHTML);
            char = '/';
            reset();
        }


    });
});

const equalBtn = document.querySelector(".btnEqual");

equalBtn.addEventListener("click",()=>{

    let result=0;
    number2 = Number.parseFloat(input.innerHTML);
    
    switch(char){
        case '+':
            result = number1 + number2;
            input.innerHTML = result;
            break;

        case '-':
            result = number1 - number2;
            input.innerHTML = result;
            break;

        case '*':
            result = number1 * number2;
            input.innerHTML = result;
            break;

        case '/':
            result = number1 / number2;
            input.innerHTML = result;
            break;
    }
});




deleteBtn.addEventListener("click",() =>{
    arr.pop();
    let stringAgain = arr.join("");
    input.innerHTML = stringAgain;

    if(stringAgain==""){
        reset();
    }
    
});

clearBtn.addEventListener("click",()=>{
    reset();
});





