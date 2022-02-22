import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    return ( 
        <form>
            <div className = 'new-expense__controls'>
                <div classNamw = 'new-expense__controls'>
                    <label>Title</label>
                    <input type = 'text'/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' min = "0.01" step = "0.01"/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' min = "01-01-2022" max = "01-01-2050"/>
                </div>
            </div>
            <div className = "new-expense__actions" >
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;