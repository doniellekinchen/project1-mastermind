console.log('js:loaded')

// Generate secret random code
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

let paragraph = document.getElementById("madscitalk"); //globally scoped
function selectPotions(e){
    console.log("FINALLY!", e.target.id);
    maintable.rows[turnNumber].cells[guessNumber].style.background = e.target.id // targets each cell in the maintable 
    console.log(maintable.rows[turnNumber].cells[guessNumber]) //grab and change style.bkg property
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

    function checkGuess(){
        console.log('code', code)
        console.log(guessArray)
        if (JSON.stringify(code) ===  JSON.stringify(guessArray)) {
            document.getElementById(`hint${number}`).style.backgroundColor = "green"
            showSolution();
            paragraph.innerHTML = "YOU GOT IT CORRECT! UGH! Take your potion and go!";
        } else if (JSON.stringify(code) !== JSON.stringify(guessArray)) {
            document.getElementById(`hint${number}`).style.backgroundColor = "red"
            number++ // shows the red/green hint in the 5th column
            turnNumber++;
            paragraph.innerHTML = "HAHA! something is wrong!"
            if (turnNumber === 6){
                showSolution(); 
                paragraph.innerHTML = "HAHA! GAME OVER! Rest the game to try again!"
            }
        }
        
    }
