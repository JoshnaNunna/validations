document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('useridError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('nameError').textContent = '';
    document.getElementById('countryError').textContent = '';
    document.getElementById('sexError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Get form values
    const userid = document.getElementById('userid').value.trim();
    const password = document.getElementById('password').value.trim();
    const name = document.getElementById('name').value.trim();
    const country = document.getElementById('country').value;
    const sex = document.querySelector('input[name="sex"]:checked');
    const languages = document.querySelectorAll('input[name="languages"]:checked');

    let isValid = true;

    // User ID validation
    if (userid.length < 5 || userid.length > 12) {
        document.getElementById('useridError').textContent = 'User ID must be between 5 and 12 characters.';
        isValid = false;
    }

    // Password validation
    if (password.length < 7 || password.length > 12) {
        document.getElementById('passwordError').textContent = 'Password must be between 7 and 12 characters.';
        isValid = false;
    }

    // Name validation
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name)) {
        document.getElementById('nameError').textContent = 'Name must contain only alphabets.';
        isValid = false;
    }

    // Country validation
    if (country === '') {
        document.getElementById('countryError').textContent = 'Please select a country.';
        isValid = false;
    }

    // Sex validation
    if (!sex) {
        document.getElementById('sexError').textContent = 'Please select your sex.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('formSuccess').textContent = 'Registration successful!';
        // Optionally, you can submit the form data to the server here
    }
});