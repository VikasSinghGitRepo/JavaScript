var arr = ["Stone", "Paper", "Scissor"];
let playAgain = true
while(playAgain){
    let random = arr[Math.floor(Math.random() * arr.length)];
    random = random.toString();
   // console.log("Random:", random);
    let userVar = Number.parseInt(prompt("Enter 1 for Stone, 2 for Paper, 3 for Scissor"))
    if ((userVar == 1 && random == 'Stone') || (userVar == 2 && random == 'Paper') || (userVar == 3 && random == 'Scissor')) {
        alert("It's a tie...")
    }
    else if ((userVar == 1 && random == 'Paper') || (userVar == 2 && random == 'Scissor') || (userVar == 3 && random == 'Stone')) {
        alert("oops you lose...")
    }
    else if((random == 'Scissor' && userVar == 1) || (random == 'Stone' && userVar ==2) || (random == 'Paper' && userVar == 3)){
        alert("Congratulations You win...")
    }
    else{
        alert("Enter expected number i.e 1,2,3")
    }   
     playAgain=confirm("do you want to play again...?")
}
