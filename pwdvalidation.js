document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';  // Clear previous errors

    const validationMessages = validatePassword(password);

    if (validationMessages.length > 0) {
        errorElement.textContent = validationMessages.join('\n');
    } else {
        // Proceed with signup logic
        alert('Signup successful!');
    }
});

document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text'; // Show password
    } else {
        passwordField.type = 'password'; // Hide password
    }
});

function validatePassword(password) {
    const messages = [];

    // Rule 1: 7 to 16 characters containing only characters, numeric digits, and underscore; the first character must be a letter
    if (!/^[A-Za-z][A-Za-z0-9_]{6,15}$/.test(password)) {
        messages.push('Password must be 7-16 characters long, contain only letters, digits, and underscore, and start with a letter.');
    }

    // Rule 2: 6 to 20 characters that contain at least one numeric digit, one uppercase, and one lowercase letter
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
        messages.push('Password must be 6-20 characters long and contain at least one digit, one uppercase letter, and one lowercase letter.');
    }

    // Rule 3: 7 to 15 characters which contains at least one numeric digit and a special character
    if (!/^(?=.*\d)(?=.*[\W_]).{7,15}$/.test(password)) {
        messages.push('Password must be 7-15 characters long and contain at least one digit and one special character.');
    }

    // Rule 4: 8 to 15 characters that contains at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$/.test(password)) {
        messages.push('Password must be 8-15 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
    }

    return messages;
}