document.getElementById('ipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ipAddress = document.getElementById('ipAddress').value;
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';  // Clear previous errors

    if (validateIPAddress(ipAddress)) {
        alert('Valid IP address!');
    } else {
        errorElement.textContent = 'Invalid IP address!';
    }
});

function validateIPAddress(ip) {
    // Regular expression to match valid IP addresses
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
    return ipPattern.test(ip);
}
