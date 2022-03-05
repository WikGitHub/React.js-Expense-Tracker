import Reac, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); // using string as the input value is always read as a string, even if its a number 
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    return ( 
        <form>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type = 'text' onChange = {titleChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' min = "0.01" step = "0.01" onChange = {amountChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' min = "01-01-2022" max = "01-01-2050" onChange = {dateChangeHandler}/>
                </div>
            </div>
            <div className = "new-expense__actions" >
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;