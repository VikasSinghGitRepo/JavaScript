console.log("Welcome  to guess the no game..❤")
//let userInput
const min = 1;
const max = 100;
let count=0;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);


do{
    userInput=Number.parseInt(prompt("Guess the number...."))
    if(randomNumber>userInput){
        console.log("Oops! wrong guess the number you entered is less than that number \n Try Again .. ")
    }
    else if(randomNumber<userInput){
        console.log("Oops! wrong guess the number you entered is more than that number \n Try Again ..")
    }
    count++
}while(userInput!=randomNumber)

console.log("Congrats you reached out to correct guess in ",count," attempts !!!")





