let count=0;

let countEl= document.getElementById("counter-element");
let saveEl = document.getElementById("save-element");


function increment() {
    count=count+1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

let welcomeEl= document.getElementById("welcome-element");
let nameRezaul = "Eng Md Rezaul Huq Masud";
let greetings = "Hello a full stack web developer ";

let nameGreetings = greetings + nameRezaul;

welcomeEl.innerText= nameGreetings;
 


let num1=15;
let num2=7;
 
let firstNumberBtn = document.getElementById("first-number-btn");
firstNumberBtn += num1;
let secondNumberBtn = document.getElementById("second-number-btn");
secondNumberBtn += num2;

let num1El=document.getElementById("number-element1");
num1El.textContent = num1;

let num2El=document.getElementById("number-element2");
num2El.textContent = num2;

let sumButton = document.getElementById("sum-btn");

let sumEl=document.getElementById("sum-element");

function add() {
    let result = num1+num2;
    console.log(result);
    sumEl.textContent = " ";
    sumEl.textContent += result;
}

function sub() {
    let result = num1-num2;
    console.log(result);
    sumEl.textContent = " ";
    sumEl.textContent += result;
}

function mul() {
    let result = num1*num2;
    console.log(result);
    sumEl.textContent = " ";
    sumEl.textContent += result;
}
function div() {
    let result = num1/num2;
    console.log(result);
    sumEl.textContent = " ";
    sumEl.textContent += result;
}

