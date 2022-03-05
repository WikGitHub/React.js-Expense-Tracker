import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); // using string as the input value is always read as a string, even if its a number 
    const [enteredAmount, setEnteredAmount] = useState('');
// can turn this into calling useState once by doing the below 
// const [userInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''}) but now you have to update all 3 properties, not just one

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return ( 
        <form onSubmit={submitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type = 'text' value = {enteredTitle} onChange = {titleChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' min = "0.01" step = "0.01" value={enteredAmount} onChange = {amountChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' min = "01-01-2022" max = "01-01-2050" value={enteredDate} onChange = {dateChangeHandler}/>
                </div>
            </div>
            <div className = "new-expense__actions" >
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;