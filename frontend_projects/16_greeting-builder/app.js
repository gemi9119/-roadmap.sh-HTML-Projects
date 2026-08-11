function formatName(firstname, lastname){
    return `${firstname} ${lastname}`;
}
function getGreeting(timeOfDay){
    return `Good ${timeOfDay}, `
}
function createGreeting(firstname, lastname, timeOfDay){
    return getGreeting(timeOfDay) + formatName(firstname, lastname)
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
