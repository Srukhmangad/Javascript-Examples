function Addition(num1,num2){
    Output=num1+num2

    console.log(num1 +" + " +num2 +"= " +Output);
}

function Substraction(num1,num2) {
    Output=num1-num2
    console.log(num1 +" - " +num2 +"= " +Output);
}

function Multiplication(num1,num2) {
    Output=num1*num2
    console.log(num1 +" X " +num2 +"= " +Output);
}

function Division(num1,num2) { 
    Output=num1/num2
    console.log(num1 +" / " +num2 +"= " +Output);
}

alert("Choose Operation:\n1. Addition\n2. Substracion\n3. Multiplication\n4. Division")
Ip=parseInt(prompt("Please enter your choice:"))
        if(Ip===1){
            number1=parseInt(prompt("Enter first number:"))
            number2=parseInt(prompt("Enter second number:"))
            op=Addition(number1,number2)}

        if(Ip===2){
            number1=parseInt(prompt("Enter first number:"))
            number2=parseInt(prompt("Enter second number:"))
            op=Substraction(number1,number2)}
        
        else if(Ip===3){
            number1=parseInt(prompt("Enter first number:"))
            number2=parseInt(prompt("Enter second number:"))
            op=Multiplication(number1,number2)}

        else if(Ip===4){
            number1=parseInt(prompt("Enter first number:"))
            number2=parseInt(prompt("Enter second number:"))
            op=Division(number1,number2)}
        
        else{
            document.write("out of stock")
        }