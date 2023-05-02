var arr = ["Snake", "Water", "Gun"];
let playAgain = true;

while(playAgain){
    let random = arr[Math.floor(Math.random() * arr.length)];
    random = random.toString();
    //console.log("Random:", random);
    let userVar = Number.parseInt(prompt("Enter 1 for Snake, 2 for Water, 3 for Gun"))
    if ((userVar == 1 && random == 'Snake') || (userVar == 2 && random == 'Water') || (userVar == 3 && random == 'Gun')) {
        alert("It's a tie...")
    }
    else if ((userVar == 1 && random == 'Gun') || (userVar == 2 && random == 'Snake') || (userVar == 3 && random == 'Water')) {
        alert("oops you lose...")
    }
    else if((random == 'Water' && userVar == 1) || (random == 'Gun' && userVar == 2) || (random == 'Snake' && userVar ==3)){
        alert("Congratulations You win...")
    }
    else{
        alert("Enter expected number i.e 1,2,3")
    }   
     playAgain=confirm("do you want to play again...?")
}
