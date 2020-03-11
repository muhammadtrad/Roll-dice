
const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");
const audio = new Audio("https://actions.google.com/sounds/v1/sports/metal_strike.ogg");

function getRandomNumber(){
    return Math.ceil(Math.random()*6);
}

// ES5 uses the + myRandomNumber +  ' ' + , while ES6 uses the ${myRandomNumber}
function showDice(){
   diceTriggerEl.addEventListener("click", function() {
    audio.play();   
    let myRandomNumber = getRandomNumber();
    diceImageEl.src = `images/dice${myRandomNumber}.png`;
   } );
}


showDice();