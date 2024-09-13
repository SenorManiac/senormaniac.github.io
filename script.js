
let o = getRandomInt()
function getRandomInt() {
    return Math.floor(Math.random() * 5);
}
let x = 5;
let humanScore = 0;
let computerScore =0;
yourscore.innerHTML = "<h1>" + humanScore + "</h1><p>Your Score</p>";
computerscore.innerHTML = "<h1>" + computerScore + "</h1><p>Computer Score</p>";
const buttons = document.querySelectorAll(".images button");



function getMyEmoji() {
    let e;
    if (x == 0) {
        e = '&#x270A;';
    } else if (x == 1) {
        e = '&#x1F590;';
    } else if (x == 2) {
        e = '&#x270C;';
    } else if (x == 3) {
        e = '&#x1F98E;';
    } else if (x == 4) {
        e = '&#x1F596;';
    }
    return e;
}

function getComputerEmoji() {
    let y;
    if (o == 0) {
        y = '&#x270A;';
    } else if (o == 1) {
        y = '&#x1F590;';
    } else if (o == 2) {
        y = '&#x270C;';
    } else if (o == 3) {
        y = '&#x1F98E;';
    } else if (o == 4) {
        y = '&#x1F596;';
    }
    return y;
}
function setValueForx(button){
    if (button.id  == 'id0') {
        x = 0
      } else if (button.id == 'id1') {
        x = 1;
    } else if (button.id == 'id2') {
        x = 2;
    } else if (button.id == 'id3') {
        x = 3;
    } else if (button.id == 'id4') {
        x = 4;
    }
   
}
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        setValueForx(button);
        playRound();
        const myEmoji = getMyEmoji();
        const computerEmoji = getComputerEmoji();
        const outcome = getOutcome(x, o);
        document.getElementById('round').innerHTML = "You chose " + myEmoji + " and the computer chose " + computerEmoji;
        document.getElementById('outcome').innerText = outcome;
        x = 5;
        if (declareWinner()) {
            return;
        }
    });
});



// function getHumanChoice(){
// if (i.toLowerCase() == 'rock'){
//      return x = 0;
// }
// else if (i.toLowerCase() == 'paper'){
//      return x = 1;
// }
// else if (i.toLowerCase() == 'scissors'){
//      return x = 2;
// }
// else 
//     alert('You did not enter rock paper or scissors, please make a valid choice');
//     i = prompt('Rock, Paper, Or Scissors',);
// }
console.log(x)
// function checkChoice(){
//     while (x == 3){
//     getHumanChoice()
// }}

// console.log('Flag')
// console.log(x);
// console.log(o);

function updateScores() {
    if ((o == 1 && (x == 0 || x == 4)) || (o == 2 && (x == 1 || x == 3)) || (o == 0 && (x == 2 || x == 3)) || (o == 3 && (x == 4 || x == 1)) || (o == 4 && (x == 0  || x == 2))) {
        computerScore++;
        yourscore.innerHTML = "<h1>" + humanScore + "</h1><p>Your Score</p>";
computerscore.innerHTML = "<h1>" + computerScore + "</h1><p>Computer Score</p>";
        // alert('You lost this round: The score is ' + humanScore + ' to ' + computerScore);
    } else if ((x == 1 && (o == 0 || o == 4)) || (x == 2 && (o == 1 || o == 3)) || (x == 0 && (o == 2 || o == 3)) || (x == 3 && (o == 4 || o == 1)) || (x == 4 && (o == 0  || o == 2))) {
        humanScore++;
        yourscore.innerHTML = "<h1>" + humanScore + "</h1><p>Your Score</p>";
        computerscore.innerHTML = "<h1>" + computerScore + "</h1><p>Computer Score</p>";
        // alert('Computer lost this round: The score is ' + humanScore + ' to ' + computerScore);
    } else {
        // alert('This round was a tie: The score is ' + humanScore + ' to ' + computerScore);
    }
}
function getOutcome(x, o) {
    if (x == 0 && o == 2) {
        return "As always rock crushes scissors";
    } else if (x == 0 && o == 3) {
        return "Rock crushes lizard";
    } else if (x == 1 && o == 0) {
        return "Paper covers rock";
    } else if (x == 1 && o == 4) {
        return "Paper disproves Spock";
    } else if (x == 2 && o == 1) {
        return "Scissors cuts paper";
    } else if (x == 2 && o == 3) {
        return "Scissors decapitates lizard";
    } else if (x == 3 && o == 1) {
        return "Lizard eats paper";
    } else if (x == 3 && o == 4) {
        return "Lizard poisons Spock";
    } else if (x == 4 && o == 0) {
        return "Spock vaporizes rock";
    } else if (x == 4 && o == 2) {
        return "Spock smashes scissors";
    } else if (o == 0 && x == 2) {
        return "As always rock crushes scissors";
    } else if (o == 0 && x == 3) {
        return "Rock crushes lizard";
    } else if (o == 1 && x == 0) {
        return "Paper covers rock";
    } else if (o == 1 && x == 4) {
        return "Paper disproves Spock";
    } else if (o == 2 && x == 1) {
        return "Scissors cuts paper";
    } else if (o == 2 && x == 3) {
        return "Scissors decapitates lizard";
    } else if (o == 3 && x == 1) {
        return "Lizard eats paper";
    } else if (o == 3 && x == 4) {
        return "Lizard poisons Spock";
    } else if (o == 4 && x == 0) {
        return "Spock vaporizes rock";
    } else if (o == 4 && x == 2) {
        return "Spock smashes scissors";
    } else {
        return "It's a tie!";
    }
}

function playRound(){
    o = getRandomInt();
    updateScores();
    console.log(humanScore + ' my score');
    console.log(computerScore);
        
}

console.log(humanScore)
console.log(computerScore)

// function continuePlaying(){
//     while (humanScore < 5  && computerScore < 5){
//         playRound();
//     }
// }


function declareWinner(){
    if (humanScore == 5 || computerScore == 5){
    var modal2 = document.getElementById("myModal2");
    var span = document.getElementsByClassName("close")[1];

    modal2.style.display = "flex";
    span.onclick = function() {
        modal2.style.display = "none";
    }
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    if (humanScore == 5) {
        document.getElementById('winner').innerText = "Congratulations! You won the game!";
    } else if (computerScore == 5) {
        document.getElementById('winner').innerText = "Sorry! You lost the game!";
    }
    yes.onclick = function() {
        location.reload();
    }
    no.onclick = function() {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    span.onclick = function() {
        modal2.style.display = "none";
    }
}}

// Get the modal
var modal = document.getElementsByClassName("modal")[0];
var modalcontent1 = document.getElementsByClassName("modal-content")[0];
// Get the button that opens the modal
var btn = document.getElementById("rules");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
  modalcontent1.style.height ="270px";

  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



