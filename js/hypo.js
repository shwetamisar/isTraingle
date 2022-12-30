const sides=document.querySelectorAll(".side-input");
const buttonHypotenuse = document.querySelector("#hypotenuse-btn");
const outputHypotenuse = document.querySelector("#output");

buttonHypotenuse.addEventListener("click",displayOutput);

function displayOutput()
{
    let side1=sides[0].value;
    let side2=sides[1].value;
    if(( side1 > 0) && (side2 > 0))
    {
        hypotenuse=calculateHypotenuse(side1,side2);
        outputHypotenuse.style.display="block";
        outputHypotenuse.innerText="Hypotenuse is "+hypotenuse;
    }
    else{
        outputHypotenuse.style.display="block";
        outputHypotenuse.innerText="Invalid Input"
    }

}

function calculateHypotenuse(side1,side2)
{
  let hypotenuse=Math.sqrt((side1 * side1) + (side2 * side2)).toFixed(2);
  return hypotenuse;
}