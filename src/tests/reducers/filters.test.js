import filtersReducer from '../../reducers/filter';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set up sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set up sortby to date', () => {
    const currentState =  {
        text: '',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined    
    };

    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'abc'
    });
    expect(state.text).toBe('abc');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: moment(0).valueOf()
    });
    expect(state.startDate).toBe(moment(0).valueOf());
});


test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: moment(0).valueOf()
    });
    expect(state.endDate).toBe(moment(0).valueOf());
});