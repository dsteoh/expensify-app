import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt }) => {
        expensesData[id] = {description, note, amount, createdAt}
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id is not found', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
        description: 'Coffee',
        note: '',
        amount: 195,
        createdAt: 0
    }
    const action = { 
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense', () => {
    const amount = 1200;
    const action = { 
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id is not found', () => {
    const amount = 1200;
    const action = { 
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should set expenses', () => {
    const action = { 
        type: 'SET_EXPENSES',
        expenses: [expenses[1]] 
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
});