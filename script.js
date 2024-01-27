
function playRound(computer, player){

    if (computer === player.toLowerCase())
    {
        const newcomputer = getComputerChoice();
        return playRound(newcomputer, player);
    }

    else if (
            (player.toLowerCase() == "rock" && computer == "scissors") ||
             (player.toLowerCase() == "paper" && computer == "rock") ||
             (player.toLowerCase() == "scissors" && computer == "paper")
             ){
         
                return "You win!";
    }
       
    else if (
            (computer == "rock" && player.toLowerCase() == "scissors") ||
            (computer == "paper" && player.toLowerCase() == "rock") ||
            (computer== "scissors" && player.toLowerCase() == "paper")
            ){
         
                return "You lose!";
    }   
} 


//get random computer choice of rps
const rps = ["rock", "paper", "scissors"];
function getComputerChoice(){
     
    return rps[Math.floor(Math.random() * rps.length)];

}




function game(){

    let playerScore = 0;
    let compScore = 0;
    

    for(var i=0; i<5; i++){
        
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock Paper Sciscors");


        let roundWinner = playRound(computerChoice, playerChoice);
        console.log(roundWinner);
        if (roundWinner.includes("You win")){
            playerScore ++;   
        }
        else if (roundWinner.includes("You lose")){
            compScore++;
        }   
        
        console.log("Score of round " + i + " is: Player = " + playerScore + " and Comp = "+ compScore);
    }
    

    if (playerScore > compScore){
        return "You win!";
    }
    else{
        return "You lose!";
    }


}


console.log(game());