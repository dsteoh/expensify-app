import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpenese, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpenese(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
    
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpenese: (id, expense) => dispatch(editExpenese(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);