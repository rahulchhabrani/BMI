const height=document.querySelector("#height");
const weight=document.querySelector("#weight");
const calculate=document.querySelector("#calculate");
const YourBMI=document.querySelector("#YourBMI");
calculate.addEventListener("click" , ()=>{
    if(height.value != "" && weight.value !="")
    {
        let bmiValue = weight.value / (height.value *height.value) * 10000;
        YourBMI.innerHTML = `Your BMI Is :<span> ${bmiValue.toFixed(2)} </span>`
    }
    else
    {
        YourBMI.innerHTML=`Please Enter Correct Value`;
    }
    
});