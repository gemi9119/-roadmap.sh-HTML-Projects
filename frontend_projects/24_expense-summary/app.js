function calculateTotal(expenses){
    let total = 0;
    for(const expense of expenses){
        total += expense.amount;
    }
    return total;
}
function calculateCategoryTotal(expenses, category){
    let categoryTotal = 0;
    for(const expense of expenses){
        if(expense.category === category){
            categoryTotal += expense.amount
        }
    }
    return categoryTotal;
}
function findLargestExpense(expenses){
    let firstExpense = expenses[0];
    let largestExpense = {};

    for(const expense of expenses){
        if(expense.amount >= firstExpense.amount){
            largestExpense = expense;
        }
    }
    return largestExpense;
}
function createExpenseSummary(expenses){
    const total = calculateTotal(expenses);
    const foodTotal = calculateCategoryTotal(expenses, 'food');
    const transportTotal = calculateCategoryTotal(expenses, 'transport');
    const largestExpense = findLargestExpense(expenses);

    return {
        total,
        foodTotal,
        transportTotal,
        largestExpense,
    }
}

const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));