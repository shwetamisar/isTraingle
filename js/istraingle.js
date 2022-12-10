let angle=document.querySelectorAll(".angle-input");
let triangleButton=document.querySelector("#is-traingle-btn");
let output=document.querySelector("#output");


triangleButton.addEventListener("click",showOutput);

function checkSum(angle)
{
    let sum=0
    for(let i=0;i<angle.length;i++)
    {
        sum=sum+parseInt(angle[i].value);
        
    }

   
return sum;
}


function showOutput()
{
    let sum=checkSum(angle);
    if(sum===180)
    {
        output.innerText="It is a triangle!";
        output.style.display="block";
       
    }
    else{
        output.innerText="It is not a triangle";
        output.style.display="block";
        
    }

}