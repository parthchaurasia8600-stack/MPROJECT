// TOGGLE

const btn = document.querySelector(".btn");

let mode ="light";
function darkLight(){
    if(mode==="light"){
        btn.style ="margin-left:100px";
        mode="dark";
        document.body.style="background-color-black; color:white"
    }else{
        btn.style="margin-left:4px";
        mode="light";
        document.body.style="background-color:wheat;color:black"
    }
}

// BUTTON

const num=document.getElementById("num");
const add=document.getElementById("plus");
add.addEventListener("click",()=>{
    num.value++;
});
const min=document.getElementById("minus");
min.addEventListener("click",()=>{
    if(num.value>0){
    num.value--;
}
});

// CALC

const input =document.querySelector(".inputBox");

function value(val){
    input.value+=val
}

function clearData(){
    input.value="0"
}

function calculate(){
    input.value=eval(input.value)
}

function deleteDigit(){
    input.value=input.value.slice(0,-1)
}

