import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note='', 
        amount=0, 
        createdAt=0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


//EDIT_EXPENSE 
const editExpenese = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


const expsensesReducerDefaultState = [];
const expsensesReducer = (state = expsensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id)
            )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
}


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined     
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortbyDate = () => ({
    type: 'SORT_BY_DATE',
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const filterReducer = (state = filterReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state, 
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
                return {
                    ...state, 
                    sortBy: 'amount'
                }
        case 'SET_START_DATE':
                return {
                    ...state, 
                    startDate: action.startDate
                }
        case 'SET_END_DATE':
                return {
                    ...state, 
                    endDate: action.endDate
                }
        default: 
            return state;
    }
}

//Filters Reducer
//text => '', sortBy => 'date', startDate => undefined, endDate => undefined

//Get visible expenses
const getVisibleExpenses = (expense, {text, sortBy, startDate, endDate}) => {
    return expense.filter((expense)=> {
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text != 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy ==='amount') {
            return a.amount < b.amount ? -1 : 1;
        }
    })
};



//Store creation
const store = createStore (
    combineReducers({
        expsenses: expsensesReducer,
        filters: filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expsenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000}));

//store.dispatch(removeExpense({ id: expenseOne.expense.id}));
//store.dispatch(editExpenese(expenseOne.expense.id, { amount: 500 }));

//  store.dispatch(setTextFilter('testing'))
 store.dispatch(sortByAmount());
 store.dispatch(sortbyDate());

// store.dispatch(setStartDate(900));
// store.dispatch(setEndDate(2000));
// store.dispatch(setTextFilter('Coffee'));