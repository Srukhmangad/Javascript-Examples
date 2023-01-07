function fibonacci(num){
        
    let x=0
    let y=1
    let z=0;
    var arr=[0,1];
    
    for(var i=2;i<=num;i++){
    
        z=x+y;
        x=y;
        y=z;
        arr.push(y);
    }
    for(i in arr){
    console.log(arr[i]);
    
}
}
input= parseInt(prompt("Enter the range for fibonacci series:"));
output=fibonacci(input);