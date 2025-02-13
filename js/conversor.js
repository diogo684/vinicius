function convertTemp() {
    const tempInput = document.getElementById('tempInput').value;
    const tempType = document.getElementById('tempType').value;
    let result;

    if (tempType === 'celsius') {
        result = (tempInput * 9/5) + 32;
        document.getElementById('result').innerText = `${tempInput}°C é igual a ${result.toFixed(2)}°F`;
    } else {
        result = (tempInput - 32) * 5/9;
        document.getElementById('result').innerText = `${tempInput}°F é igual a ${result.toFixed(2)}°C`;
    }
}