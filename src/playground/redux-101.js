import { createStore } from 'redux'

//Action generator - are functions that creates action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setBy = 0} = {}) => ({
    type: 'SET',
    setBy
});

const resetCount = ({reset = 0} = {}) => ({
    type: 'RESET',
    reset
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action 
const countReducer = (state = {count: 0}, action)=> {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.setBy
            };
        case 'RESET':
            return {
                count: action.reset
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

//Returns a unsub function
const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount());
store.dispatch(setCount({setBy: 101}));

store.dispatch(resetCount());
