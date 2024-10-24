// script.js
function calculatePrice() {
    // Get inputs from the form
    const dogSize = document.getElementById('dogSize').value;
    const numDays = parseInt(document.getElementById('numDays').value);

    // Ensure the number of days is a valid number
    if (isNaN(numDays) || numDays <= 0) {
        alert("Please enter a valid number of days.");
        return;
    }

    // Define the rates for dog sizes
    const rates = {
        small: 30,
        large: 32
    };

    // Utah tax rate
    const taxRate = 0.47;

    // Get the daily rate based on the selected dog size
    const dailyRate = rates[dogSize];

    // Calculate the total cost before tax
    const totalBeforeTax = dailyRate * numDays;

    // Calculate the tax
    const taxAmount = totalBeforeTax * taxRate;

    // Calculate the total cost with tax
    const totalWithTax = totalBeforeTax + taxAmount;

    // Display the result in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Dog Size: ${dogSize.charAt(0).toUpperCase() + dogSize.slice(1)}</p>
        <p>Number of Days: ${numDays}</p>
        <p>Total Cost (before tax): $${totalBeforeTax.toFixed(2)}</p>
        <p>Tax: $${taxAmount.toFixed(2)}</p>
        <p>Total Cost (with tax): $${totalWithTax.toFixed(2)}</p>
    `;
    
    // Show the result div
    resultDiv.style.display = 'block';
}
