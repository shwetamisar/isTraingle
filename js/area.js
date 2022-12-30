const height=document.querySelector(".input-height");
const base=document.querySelector(".input-base");
const areaButton=document.querySelector("#area-button");
const disoutput=document.querySelector("#output");


areaButton.addEventListener("click",displayOutput)

function calculateArea(height,base)
{
 let area=(height*base)/2;
 return area;
}

function displayOutput()
{
    let heightOfTriangle=parseInt(height.value);
    let baseOfTriangle=parseInt(base.value);
    if(( heightOfTriangle > 0) && (baseOfTriangle > 0))
    {
     area=calculateArea(heightOfTriangle,baseOfTriangle);
     disoutput.style.display="block";
     disoutput.innerText="Area of triangle is "+area;
    }
    else{
        disoutput.style.display="block";
        disoutput.innerText="Invalid input"
    }
    
    
}