function convertTemperature() {
    const input = document.getElementById('tempInput').value;
    const error = document.getElementById('error');
    const result = document.getElementById('result');
    
    // Validate input
    if (input === '' || isNaN(input)) {
        error.classList.add('show');
        result.textContent = 'Enter a temperature to convert';
        return;
    }
    
    error.classList.remove('show');
    
    const temp = parseFloat(input);
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    
    let celsius, fahrenheit, kelvin;
    
    // Convert to all units based on input
    if (selectedUnit === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (selectedUnit === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else { // kelvin
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }
    
    // Display results
    let resultHTML = '';
    
    if (selectedUnit !== 'celsius') {
        resultHTML += `<strong>${celsius.toFixed(2)}°C</strong><br>`;
    }
    if (selectedUnit !== 'fahrenheit') {
        resultHTML += `<strong>${fahrenheit.toFixed(2)}°F</strong><br>`;
    }
    if (selectedUnit !== 'kelvin') {
        resultHTML += `<strong>${kelvin.toFixed(2)}K</strong>`;
    }
    
    result.innerHTML = resultHTML;
}

// Allow Enter key to trigger conversion
document.getElementById('tempInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});

// Clear error when user starts typing
document.getElementById('tempInput').addEventListener('input', function() {
    document.getElementById('error').classList.remove('show');
});
