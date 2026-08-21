function cleanText(text){
    return text.trim();
}
function capitalize(text){
    const cleaned = cleanText(text).toLowerCase();
    
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}
function formatDisplayName(firstname, lastname){
    const cleanFirstName = capitalize(firstname);
    const cleanLastName = capitalize(lastname);

    return `${cleanFirstName} ${cleanLastName}`;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));