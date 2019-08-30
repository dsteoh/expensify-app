import database from '../firebase/firebase';

// components calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// components calls action generator
// action generator returns function
// component dispatches function (?)
// function run (has the ability to dispatch other action and do whatever it wants)

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note='', 
            amount=0, 
            createdAt=0
        } = expenseData
        
        const expense = {description, note, amount, createdAt};
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));    
        });
    }
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


//EDIT_EXPENSE 
export const editExpenese = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})
 
