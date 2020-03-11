const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");


function getRandomNumber(){
    return Math.ceil(Math.random()*6);
}

// ES5 uses the + myRandomNumber +  ' ' + , while ES6 uses the ${myRandomNumber}
function showDice(){
   diceTriggerEl.addEventListener("click", function() {
       let myRandomNumber = getRandomNumber();
       diceImageEl.src = `images/dice${myRandomNumber}.png`;
   } );
}

showDice();