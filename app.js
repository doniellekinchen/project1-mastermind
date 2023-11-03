console.log('js:loaded')

// Mad scientist's code
let code = [];
function generateSecretCode() {
    const potions = ['purple', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * potions.length);
        const selectedPotion = potions.splice(randomIndex, 1)[0];
        code.push(selectedPotion);
    }
    potions.push(...code);
    return code;
}

//button clicker for each box to go into maintable

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


//the function for the each button to be selected and input into maintable

function selectPotions(e){ 
    console.log("FINALLY!", e.target.id);
    maintable.rows[turnNumber].cells[guessNumber].style.background = e.target.id // targets each cell in the maintable 
    console.log(maintable.rows[turnNumber].cells[guessNumber]) 
    let currentGuess = e.target.id
    guessArray.push(currentGuess) 
    guessNumber++
    if (guessNumber === 4){
        checkGuess()
        guessArray = []
        guessNumber = 0
    }
    
} 

let number = 1; //globally scoped for checkGuess

function setCellColor(cell, color){
    cell.style.backgroundColor = color;
}

//shows the solution before and after 6 tries

function showSolution(){ 
    const solutionRow = document.getElementById("solution1");
    for (let i = 0; i < code.length; i++) {
        setCellColor(solutionRow.cells[i], code[i]);
    }
}

//main function of the game

let paragraph = document.getElementById("madscitalk"); //globally scoped

    function checkGuess(){
        console.log('code', code)
        console.log(guessArray)
        if (JSON.stringify(code) ===  JSON.stringify(guessArray)) { //compares the two arrays
            document.getElementById(`hint${number}`).style.backgroundColor = "green" // shows the red/green hint in the 5th column
            showSolution(); // if you guess before the 6 tries, the solution shows here
            paragraph.innerHTML = "YOU GOT IT CORRECT! UGH! Take your potion and go! Reset the game to play again!";
        } else if (JSON.stringify(code) !== JSON.stringify(guessArray)) { //compares the two arrays
            document.getElementById(`hint${number}`).style.backgroundColor = "red" // shows the red/green hint in the 5th column
            number++ 
            turnNumber++;
            paragraph.innerHTML = "HAHA! Something is wrong!"
            if (turnNumber === 6){ //if you use all 6 tries...
                showSolution(); // the solution shows here
                paragraph.innerHTML = "HAHA! GAME OVER! Reset the game to try again!"
            }
        }
        
    }
