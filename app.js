console.log('js:loaded')
//define secret code
const secretCode = generateSecretCode();
let numGuesses = 0

//generate secret random code
function generateSecretCode (){
    const potions = ['purple', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    const code = [];
    for (let i = 0; i<4; i++) {
        const randomIndex = Math.floor(Math.random() * potions.length);
        code.push(potions[randomIndex]);
    }
    return code;
}


function submitPurple() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}
function submitIndigo() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}

function submitBlue() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}

function submitGreen() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}
function submitYellow() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}

function submitOrange() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}

function submitRed() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();
}

function resetGame() {
    const guessInput = document.getElementById('guessSubmit')
    const submit = guessSubmit.value.toUpperCase();
}
function checkGuess() {
    const guessInput = document.getElementById('guessSubmit')
    const submit = guessSubmit.value.toUpperCase();
}

if (checkGuess.join('') === secretCode.join('')) {

}

