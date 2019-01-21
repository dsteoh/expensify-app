import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note='', 
        amount=0, 
        createAt=0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const expsensesReducerDefaultState = [];
const expsensesReducer = (state = expsensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
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

const filterReducer = (state = filterReducerDefaultState, action ) => {
    switch (action.type) {
        default: 
            return state;
    }
}

//Filters Reducer
//text => '', sortBy => 'date', startDate => undefined, endDate => undefined

//Store creation
const store = createStore (
    combineReducers({
        expsenses: expsensesReducer,
        filter: filterReducer
    })
)

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({description: 'Rent', amount: 100}));

const demoState = {
    expsenses: [{
        id: '',
        description: '',
        note: '',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined     
    }
};
