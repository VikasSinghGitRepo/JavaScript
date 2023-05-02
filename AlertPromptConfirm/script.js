alert("Hello your script works ")
alert("enter the value of a")
let a=Number.parseInt(prompt("Enter a no","578"))
alert("you entered no of type "+(typeof(a)))
let cnfMessage=confirm("Do you want to write in a page")
if(cnfMessage){
    document.write(a)
}
else{
    document.write("Allow me to write")
}