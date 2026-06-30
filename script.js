 const operation=document.querySelectorAll(".item");
 const twoinput=document.querySelector("#twoinputs");
 const oneinput=document.querySelector("#oneinputs");
 const calc1=document.querySelector("#calculation1");
 const calc2=document.querySelector("#calculation2");
 var disp1=document.querySelector("#result1");
var disp2=document.querySelector("#result2");
var num1=document.querySelector("#num1");
var num2=document.querySelector("#num2");
var  num3=document.querySelector("#num3");
 let str;
 let result;
   
     let operationbtn=document.querySelector("#operation");
    //to change the text in operation button with text selected in dropdown list
    for (let i=0;i<10;i++)
    {
        operation[i].addEventListener("click",function(){
             disp1.innerHTML="";
              disp2.innerHTML="";
              num1.value=0;
              num2.value=0;
              num3.value=0;
              result=0;
            operationbtn.innerText=operation[i].innerText;
            console.log(operationbtn.innerText);
             str=operationbtn.innerText;
            if ((str=="Addition Operation")||(str=="Subtraction Operation")||(str=="Multiplication Operation")||(str=="Division Operation")||(str=="Modulo Operation")||(str=="Exponent Operation"))
            {
                twoinput.style.display="block";
                oneinput.style.display="none";
               
                console.log(num1,num2,str);

            }
            else if((str=="Square Operation")||(str=="Squareroot Operation")||(str=="Cube Operation")||(str=="Cuberoot Operation"))
             {
                twoinput.style.display="none";
                oneinput.style.display="block";
               
                console.log(num3,str);   
            }
            else{
                twoinput.style.display="none";
                oneinput.style.display="none";
            }
            
        });
    }
   calc1.addEventListener("click",function(){
    if(str=="Select Your Operation")
    {
        alert("kindly select your operation")
    }
    
   if(num1.value && num2.value)
   {
  //  console.log(num1.value,num2.value);
    
    switch(str)
    {
        
        case "Addition Operation":   
        result=add(parseInt(num1.value),parseInt(num2.value));
        //console.log(result);
        
        break;
        case "Subtraction Operation":   
        result=sub(parseInt(num1.value),parseInt(num2.value));
       // console.log(result);
        break;
        case "Multiplication Operation":   
        result=mul(parseInt(num1.value),parseInt(num2.value));
        //console.log(result);
        break;
        case "Division Operation":   
        result=div(parseInt(num1.value),parseInt(num2.value));
       // console.log(result);
        break;
        case "Modulo Operation":   
        result=mod(parseInt(num1.value),parseInt(num2.value));
      //  console.log(result);
        break;
        case "Exponent Operation":   
        result=exp(parseInt(num1.value),parseInt(num2.value));
       // console.log(result);
        break; 
        default:
            alert("not valid operation")
    }
     display1(result);
    }
    else
    {
        alert("Kindly check you entered all the values correctly")
        return;
    }
       
    });
 
     calc2.addEventListener("click",function(){
        if(num3.value)
        {
            console.log(num3.value);
    
          switch(str)
    {
        case "Square Operation":  
        result=square(parseInt(num3.value));
       // console.log(result);
        break;
        case "Squareroot Operation":   
        result=squareroot(parseInt(num3.value));
        //console.log(result);
        break;
        case "Cube Operation":   
        result=cube(parseInt(num3.value));
        //console.log(result);
        break;
        case "Cuberoot Operation":   
        result=cuberoot(parseInt(num3.value));
        //console.log(result);
        break;
        default:
        alert("Not Valid Operation");
        break;
    }
     display2(result);
}

    else
        {
            alert("kindly enter the value")
        } 
        });   
        
    
    
 //operators given as seperate functions  
        
    function add(a,b)
{
    return(a+b);
}
      function sub(a,b)
{
    return(a-b);
}
 function mul(a,b)
{
    return(a*b);
}
   function div(a,b)
{
    return(a/b);
}
 function mod(a,b)
{
    return(a%b);
}
 function exp(a,b)
{
    return(a**b);
}
 function square(a)    
   {
    return(a*a);
   }  
 function cube(a)    
   {
    return(a*a*a);
   }  
   function squareroot(a)    
   {
    return Math.sqrt(a);
   }  
     function cuberoot(a)    
   {
    return Math.cbrt(a);
   }            
     
    function display1(res){
        
          console.log("enetered disp1");
            disp1.style.display="block";
            disp2.style.display="none";
            disp1.innerHTML="THE RESULT IS "+res+"<br>";
    }
    function display2(res)
      { 
        console.log("enetered disp2");
        disp2.style.display="block";
        disp1.style.display="none";
        disp2.innerHTML="THE RESULT IS "+res+"<br>";
       
    }
     
    