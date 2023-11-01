console.log('js:loaded')

// Generate secret random code
let code = [];
function generateSecretCode() {
    const potions = ['purple', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * potions.length);
        code.push(potions[randomIndex]);
    }
    return code;
}

const btnSelector = document.querySelectorAll('.visible');
const maintable = document.querySelector('.maintable');
let turnNumber = 0;
let guessNumber = 0;
let guessArray = []



console.log(btnSelector)

btnSelector.forEach(btn =>{
    const potions = btn.classList[0];
    console.log(potions);
    
    btn.addEventListener("click", (e) => selectPotions(e))
    
}) 

generateSecretCode()

//button clicker for each box

function selectPotions(e){
    console.log("FINALLY!", e.target.id);
    console.log(maintable.rows[turnNumber].cells[guessNumber]) //grab and change style.bkg property
    let currentGuess = e.target.id
    guessArray.push(currentGuess)
    guessNumber++
    if (guessNumber === 4){
        checkGuess()
        guessArray = []
        guessNumber = 0
    }
    let maintable = document.querySelectorAll(".maintable").style.color = "blue"
} 
    
    
    function checkGuess(){
        console.log('code', code)
        console.log(guessArray)
        if (JSON.stringify(code) ===  JSON.stringify(guessArray)) {
            console.log('correct!!')
        } else if (JSON.stringify(code) !== JSON.stringify(guessArray)) {
            console.log('something is wrong') 
            turnNumber++
            if (turnNumber === 6){
                console.log('game over') 
            }
        }
    }

//reset button
function resetGame() {
    guessArray = [];
    guessNumber = 0;
    turnNumber = 0;
    code = []
    generateSecretCode(); // Regenerate the secret code
    console.log('start over')
    console.log(guessNumber)
}
document.getElementById("reset").onclick = function() {
    resetGame();
};




//if turnNumber = 6, then game over
