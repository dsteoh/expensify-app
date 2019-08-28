export default (expenses) => {
    const result = expenses ? expenses.reduce((total, expense) => {
        return total + expense.amount
    }, 0) 
    : 0
    return result 
};