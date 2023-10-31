console.log('js:loaded')

// Generate secret random code
function generateSecretCode() {
    const potions = ['purple', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * potions.length);
        code.push(potions[randomIndex]);
    }
    return code;
}
const btnSelector = document.querySelectorAll('.visible')


console.log(btnSelector)

btnSelector.forEach(btn =>{
    const potions = btn.classList[1];
    console.log(potions);
    
    btn.addEventListener("click", () => selectPotions())
    
}) 

function selectPotions(){
    console.log("FINALLY!");
}
