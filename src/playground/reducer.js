import {createStore, combineReducers} from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

//Store Creation 
const store = createStore(expensesReducer);
console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'teres',
        description: 'January Rent'
    }],
    filters: {
        text: 'rent'
    }
}