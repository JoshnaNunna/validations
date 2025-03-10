//phone number validation
function isValidPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    var cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned number has exactly 10 digits
    if (cleanedNumber.length === 10) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(isValidPhoneNumber("123-456-7890"));  // true
console.log(isValidPhoneNumber("1234567890"));    // true
console.log(isValidPhoneNumber("(123) 456-7890"));// true
console.log(isValidPhoneNumber("123.456.7890"));  // true
console.log(isValidPhoneNumber("123456789"));     // false
console.log(isValidPhoneNumber("12345678901"));   // false
console.log(isValidPhoneNumber("+1 123 456 7890"));// false