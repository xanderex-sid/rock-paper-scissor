function getComputerChoice() {
    let value = Math.random(); // a number between 0 and 1
    if (value < 0.30) return 'r';
    else if (value >= 0.30 && value < 0.70) return 'p';
    else return 's';
}

let buttons = document.querySelectorAll("button");
let yourScoreCount = 0;
let compScoreCount = 0;
let score = document.querySelector('#score');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let answer = document.querySelector("#answer");
        if (button.id == computerChoice) {
            answer.textContent = `Computer: ${computerChoice}, Draw!!!`;
            score.textContent = `Your Score: ${yourScoreCount} / 5 Computer Score: ${compScoreCount} / 5`;
        }
        else{
            if(button.id == 'r' && computerChoice == 'p' ||
                button.id == 'p' && computerChoice == 's' ||
                button.id == 's' && computerChoice == 'r'
            ){
                compScoreCount++;
                score.textContent = `Your Score: ${yourScoreCount} / 5 Computer Score: ${compScoreCount} / 5`;
                answer.textContent = `Computer: ${computerChoice}, You Loose!!`;
            }
            else {
                yourScoreCount++;
                score.textContent = `Your Score: ${yourScoreCount} / 5 Computer Score: ${compScoreCount} / 5`;
                answer.textContent = `Computer: ${computerChoice}, You Win!!!`;
            }
        }
        if (compScoreCount == 5){
            compScoreCount = 0;
            yourScoreCount = 0;
            answer.textContent = `Computer Won :(, Try Another Game !!!`
        }
        else if (yourScoreCount == 5){
            compScoreCount = 0;
            yourScoreCount = 0;
            answer.textContent = `You Won :)`
        }
    });
});