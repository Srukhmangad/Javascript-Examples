var input=parseInt(prompt("Enter your choice:"))
        if(input==1){
            var num_reverse=parseInt(prompt("Enter the number for reversing"));
            console.log(Reversing());
        }
        else if(input==2){
            var fibonacci_num=parseInt(prompt("Enter the number"));
            console.log(fibonacci());

        }
        else if(input==3){
            let num_mul=prompt("enter the number for multiplication")
            console.log(Multiplication());
        }
        else if(input==4){
            let num_factorial=prompt("enter the number for multiplication")
            console.log(factorial());
        }

        function fibonacci(){
        
            let x=0
            let y=1
            let z=0;
            var arr=[0,1];
            
            for(var i=2;i<=fibonacci_num;i++){
            
                z=x+y;
                x=y;
                y=z;
                arr.push(y);
            }
            return arr;
        }
        function Reversing()