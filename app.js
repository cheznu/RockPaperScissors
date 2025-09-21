function RandomInt(){
    return Math.floor(Math.random()*3+1);
}

let computerChoice = RandomInt();
console.log(computerChoice);

if(computerChoice == 1){
    console.log("Rock")
}else if(computerChoice==2){
    console.log("Scissor")
}else if(computerChoice==3){
    console.log("Paper")
}

