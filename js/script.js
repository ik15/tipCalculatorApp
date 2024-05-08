
// Variables
let billInput = document.querySelector('#bill-input');

let numPeople = document.querySelector('#people-input');

let tip = document.querySelectorAll('.box');

let tipAmount = document.querySelector('#amount-price');

let total = document.querySelector('#total');

let tipCount = 0; 

let customNum = document.getElementById('#tip-number');

let billValue = 0;

let resetAll = document.querySelector('#reset');


// EventListeners
for(let i = 0; i < tip.length; i++){
  tip[i].addEventListener('click', function(){

    for(let z = 0; z < tip.length; z++){
      tip[z].classList.remove('active');
    }

    this.classList.toggle('active');
  
    tipCount = Number(tip[i].textContent.substring(0, tip[i].textContent.length - 1));

  })
}

billInput.addEventListener('input', function(event){ 
  billValue = Number(event.target.value);
})

numPeople.addEventListener('input', function(event){
  let num = event.target.value;
  
  numPeople.textContent = Math.ceil(((billValue + (billValue * tipCount / 100)) / num));

  tipAmount.innerHTML = Math.ceil((billValue * tipCount / 100) / num) + "$";

  total.innerHTML = numPeople.textContent + "$";
})

resetAll.addEventListener('click', function(){
  total.innerHTML = " ";
  tipAmount.innerHTML = " ";
})






