document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var error = document.getElementById('error');

    if (isValidEmail(email)) {
        error.textContent = 'Valid email address.';
        error.style.color = 'green';
    } else {
        error.textContent = 'Invalid email address.';
        error.style.color = 'red';
    }
});

function isValidEmail(email) {
    // Basic structure and allowed characters
    var emailRegex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    
    // Split the email into local part and domain part
    var parts = email.split('@');
    if (parts.length !== 2) return false;

    var localPart = parts[0];
    var domainPart = parts[1];

    // Length checks
    if (localPart.length > 64 || domainPart.length > 253) return false;

    // Local part rules
    if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
    if (localPart.includes('..')) return false;
    if (!/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(localPart)) return false;

    // Domain part rules
    if (domainPart.startsWith('.')) return false;
    if (domainPart.includes('..')) return false;
    if (!/^[A-Za-z0-9.-]+$/.test(domainPart)) return false;

    return emailRegex.test(email);
}