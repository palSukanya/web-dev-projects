const btn = document.querySelector("#btn");
const amt = document.querySelector("#amt");
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    const ba = parseFloat(document.querySelector("#ba").value);
    const tp = parseFloat(document.querySelector("#tp").value);
    let tip= (tp/100)*ba; 
    if (document.querySelector("input[type=checkbox]").checked) {
        tip = Math.round(tip); 
    }
    amt.innerText = `Tip Amount : Rs. ${tip.toFixed(2)}`;
});