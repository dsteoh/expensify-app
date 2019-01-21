import {createStore, combineReducers } from 'redux';

const expsensesReducerDefaultState = [];
const expsensesReducer = (state = expsensesReducerDefaultState, action) => {
    switch (action.type) {
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

console.log(store.getState())