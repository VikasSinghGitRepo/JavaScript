console.log(window)
var browserHistory = window.history;
console.log(browserHistory);

window.open("https://www.codeWithHarry.com", "_blank", "width=500,height=500");
var currentUrl = window.location.href;

//Question1 and 2  atake age using prompt and alert he can drive or not
//question 3 if input is greater than 4 go to google.com

const canDrive = (age) => {
    return age >= 18 ? true : false;
}
let runAgain = true;

while (runAgain) {
    let age = Number.parseInt(prompt("Enter your age.."))
    if (age < 0) {
        console.error("Age cant be negative...");
        break;
    }
    else if(age>4 && age<18){
        window.open("https://www.google.com", "_blank", "width=500,height=500");
    }
    else {
        if (canDrive(age)) {
            alert("Yes ! you can drive")
        }
        else {
            alert("No ! you can't drive")
        }
    }
    runAgain = confirm("do you want to see the prompt again..?")

}

//Q4 changebackground color based on user input
let color=prompt("enter color name")
color=color.toString();
document.body.style.background=color;
