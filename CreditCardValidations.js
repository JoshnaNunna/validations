function validateCreditCard(cardNumber) {
    // remove spaces
    cardNumber = cardNumber.replace(/\s+/g, '');

    // Define regex patterns for different card types
    const patterns = {
        "American Express": /^3[47][0-9]{13}$/,
        "Visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
        "MasterCard": /^5[1-5][0-9]{14}$/,
        "Discover": /^(6011[0-9]{12}|5[0-9]{14})$/,
        "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        "JCB": /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
    };

    for (const [cardType, pattern] of Object.entries(patterns)) {
        if (pattern.test(cardNumber)) {
            return `Valid ${cardType} card number`;
        }
    }

    return "Invalid card number";
}
// Example usage
console.log(validateCreditCard("378282246310005"));  
console.log(validateCreditCard("4111134589023")); 
console.log(validateCreditCard("5555555555554444"));  
console.log(validateCreditCard("6011111111111117"));  
console.log(validateCreditCard("30569309025904"));    
console.log(validateCreditCard("3530111333300000"));