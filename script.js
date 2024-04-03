const tipForm = document.getElementById('tip-form');
const billInput = document.getElementById('bill');
const tipSlider = document.getElementById('tip-slider');
const tipPercentage = document.getElementById('tip-percentage');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');

tipForm.addEventListener('input', calculateTip); 

function calculateTip() {
    // Get values, basic validation
    const bill = parseFloat(billInput.value);
    if (isNaN(bill)) {
        alert("Please enter a valid bill amount");
        return;
    }

    const tipPercent = parseFloat(tipSlider.value);

    // Update the tip percentage field
    tipPercentage.value = tipPercent;

    // Calculate tip and total
    const tip = (bill * tipPercent / 100).toFixed(2);
    const totalBill = (bill + parseFloat(tip)).toFixed(2);

    // Update output fields
    tipAmount.value = tip;
    total.value = totalBill;
}
