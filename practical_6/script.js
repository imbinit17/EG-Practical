const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    if (validateForm()) {
        alert('Signup successful!');
        form.reset();
    }
});

const displayError = (element, message) => {
    const errorDisplay = element.parentElement.querySelector('.error');
    errorDisplay.innerText = message;
};

const clearErrors = () => {
    displayError(username, '');
    displayError(phone, '');
    displayError(password, '');
    displayError(confirmPassword, '');
};

const validateUsername = () => {
    const usernameValue = username.value.trim();
    
    if (usernameValue === '') 
    {
        displayError(username, 'Username is required');
        return false;
    } 
    else if (usernameValue.length < 3) 
    {
        displayError(username, 'Username must be at least 3 characters');
        return false;
    }

    return true;
};

const validatePhone = () => {
    const phoneValue = phone.value.trim();

    if (phoneValue === '') 
    {
        displayError(phone, 'Phone number is required');
        return false;
    } 
    else if (!/^\d{10}$/.test(phoneValue)) 
    {
        displayError(phone, 'Provide a valid 10-digit phone number');
        return false;
    }

    return true;
};

const validatePassword = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === '') 
    {
        displayError(password, 'Password is required');
        return false;
    } 
    else if (passwordValue.length < 8) 
    {
        displayError(password, 'Password must be at least 8 characters.');
        return false;
    } 
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordValue)) 
    {
        displayError(password, 'Password must contain uppercase, lowercase, number, and special character.');
        return false;
    }

    return true;
};

const validateConfirmPassword = () => {
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (confirmPasswordValue === '') 
    {
        displayError(confirmPassword, 'Please confirm your password');
        return false;
    } 
    else if (confirmPasswordValue !== passwordValue) 
    {
        displayError(confirmPassword, "Passwords don't match");
        return false;
    }

    return true;
};

const validateForm = () => {
    const isUsernameValid = validateUsername();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    return isUsernameValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid;
};