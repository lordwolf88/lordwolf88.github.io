console.log("Helló idegen!");

function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }
    if ( amountNumber > 10) {
        alert("Maximum 10 termék") 
    return   }
    else if ( amountNumber < 1) {
        alert("Minimum 1 termék")
    } else {
       let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
