import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal();
    expect(total).toBe(0)
});

test('should add up a single expense', () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toBe(expenses[1].amount)
});

test('should add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
});
