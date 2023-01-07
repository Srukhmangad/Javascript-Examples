function reverse(num){
    Output = 0 ;
    Reverse = 0;
    while(num){      
    Reverse = num % 10;  
    Output = Output * 10 + Reverse;  
    num = Math.floor(num/10); 
}
console.log(Output);
}
input=parseInt(prompt("Enter number:"));
output=reverse(input);