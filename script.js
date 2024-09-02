console.log("Hello World");

let o = getRandomInt()
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
let x = 3;

let humanScore = 0;
let computerScore =0;

let i = prompt('Rock, Paper, Or Scissors') 
console.log(i)

function getHumanChoice(){
if (i.toLowerCase() == 'rock'){
     return x = 0;
}
else if (i.toLowerCase() == 'paper'){
     return x = 1;
}
else if (i.toLowerCase() == 'scissors'){
     return x = 2;
}
else 
    alert('You did not enter rock paper or scissors, please make a valid choice');
    i = prompt('Rock, Paper, Or Scissors',);
}
console.log(x)
while (x !== 0  && x !== 1 && x !== 2){
    getHumanChoice()
}

console.log('Flag')
console.log(x);
console.log(o);

function updateScores() {
    if ((x == 0 && o == 1) || (x == 1 && o == 2) || (x == 2 && o == 0)) {
        humanScore++;
        alert('You won this round: The score is ' + humanScore + ' to ' + computerScore);
    } else if ((x == 1 && o == 0) || (x == 2 && o == 1) || (x == 0 && o == 2)) {
        computerScore++;
        alert('Computer won this round: The score is ' + humanScore + ' to ' + computerScore);
    } else {
        alert('This round was a tie: The score is ' + humanScore + ' to ' + computerScore);
    }
}


updateScores();

function playRound(){
    i = prompt('Rock, Paper, Or Scissors');
    getHumanChoice();
     o = getRandomInt();
    updateScores();
}

console.log(humanScore)
console.log(computerScore)

function continuePlaying(){
    while (humanScore < 5  && computerScore < 5){
        playRound();
    }
}

continuePlaying();

function declareWinner(){
    if (humanScore == 5){
        alert('You won the match');
    }
    else if(computerScore == 5)
        alert('Computer won the match');
    
}

declareWinner();
