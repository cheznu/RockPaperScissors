//random int between 1 and 3 function
function RandomInt(){
    return Math.floor(Math.random()*3+1);
}
//score variables
let humanScore = 0;
let pcScore = 0;

function playGame(){
        let humanChoice = prompt("Rock,Paper or Scissors???");
        let computerChoice = RandomInt();

        if(computerChoice == 1){
            console.log("computer picked Rock")
        }else if(computerChoice==2){
            console.log("computer picked Scissor")
        }else if(computerChoice==3){
            console.log("computer picked Paper")
        }


        if(humanChoice.toLowerCase()==="rock"&&computerChoice==1){
            console.log("TIE :|");
        }else if(humanChoice.toLowerCase()==="rock"&&computerChoice==2){
            console.log("YOU WIN :)");
            humanScore++;
        }else if(humanChoice.toLowerCase()==="rock"&&computerChoice==3){
            console.log("you lose :(");
            pcScore++;
        }else if(humanChoice.toLowerCase()==="paper"&&computerChoice==3){
            console.log("TIE :|");
        }else if(humanChoice.toLowerCase()==="paper"&&computerChoice==1){
            console.log("YOU WIN :)");
            humanScore++;
        }else if(humanChoice.toLowerCase()==="paper"&&computerChoice==2){
            console.log("you lose :(");
            pcScore++;
        }else if(humanChoice.toLowerCase()==="scissor"&&computerChoice==2){
            console.log("TIE :|");
        }else if(humanChoice.toLowerCase()==="scissor"&&computerChoice==3){
            console.log("YOU WIN :)");
            humanScore++;
        }else if(humanChoice.toLowerCase()==="scissor"&&computerChoice==1){
            console.log("you lose :(");
            pcScore++;
        }

        console.log("The Score for Human :" + humanScore);
        console.log("The Score for Computer : " + pcScore);


        
}

let i = 1;
while(i <=5){
    playGame();
    i++;
}
