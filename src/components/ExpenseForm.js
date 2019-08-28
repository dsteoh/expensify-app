import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChanged = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChanged = (e) => {
        const amount = e.target.value; 

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChanged = (createdAt) => {
        this.setState(() => ({createdAt}));
    };

    onCalendarFocusChanged = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: "Please enter a valid description and amount"}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                <p>{this.state.error && this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>

                    <input
                    type="text"
                    onChange={this.onAmountChanged}
                    value={this.state.amount}
                    placeholder="Amount"
                    />

                    <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.onDateChanged} // PropTypes.func.isRequired
                    focused={this.state.calendarFocused} // PropTypes.bool
                    onFocusChange={this.onCalendarFocusChanged} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />

                    <textarea 
                    placeholder="Add a note for your expense (optional)"
                    type="text"
                    value={this.state.note}
                    onChange={this.onNoteChanged}></textarea>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}