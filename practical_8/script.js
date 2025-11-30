function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9 ;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusInput = document.getElementById('celsius');

fahrenheitInput.addEventListener('input', function () {

    const fValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(fValue)) celsiusInput.value = fahrenheitToCelsius(fValue) ;
    else celsiusInput.value = '';
});

celsiusInput.addEventListener('input', function () {

    const cValue = parseFloat(celsiusInput.value);

    if (!isNaN(cValue)) fahrenheitInput.value = celsiusToFahrenheit(cValue);
    else fahrenheitInput.value = '';
});

