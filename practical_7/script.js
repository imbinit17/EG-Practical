function checkLeapYear() 
{
    const year = document.getElementById('yearInput').value;
    const resultDiv = document.getElementById('result');

    if (!year) 
    {
        resultDiv.textContent = "Please enter a valid year.";
        resultDiv.style.color = "red";
        return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ;

    if (isLeap) 
    {
        resultDiv.textContent = `${year} is a Leap Year.`;
        resultDiv.style.color = "green";
    } 
    
    else 
    {
        resultDiv.textContent = `${year} is not a Leap Year.`;
        resultDiv.style.color = "red";
    }
}
