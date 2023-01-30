var i=0,j=0,k=0;
        function TeamOne(){
            i+=1;
            document.getElementById("result").innerHTML=`Team One Clicks: ${i}`;
            document.getElementById("total1").style.display='none';
            document.getElementById("total2").style.display='none';
            document.getElementById("result").style.display='';
            document.getElementById("result").style.background='orange';
        
        }
        function TeamTwo(){
            j+=1;
            document.getElementById("result").innerHTML=`Team Two Clicks: ${j}`;
            document.getElementById("total1").style.display='none';
            document.getElementById("total2").style.display='none';
            document.getElementById("result").style.display='';
            document.getElementById("result").style.background='blue';
        }
        function TotalClicks(){
            
            document.getElementById("total1").innerHTML=`Team One Clicks: ${i}`;
            document.getElementById("total2").innerHTML=`Team Two Clicks: ${j}`;
            document.getElementById("result").style.display='none';
            document.getElementById("total1").style.display='';
            document.getElementById("total2").style.display='';
            document.getElementById("total1").style.background='orange';
            document.getElementById("total2").style.background='blue';
        }
        function reset(){
            i=0;
            j=0;
            document.getElementById("total1").style.display='none';
            document.getElementById("total2").style.display='none';
            document.getElementById("result").style.display='none';

        }