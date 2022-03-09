import ExpenseItem from './ExpenseItem';
import Card from './Card'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
    return (
        <div>
            <ExpensesFilter />
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
        </div>
    );
}

export default Expenses;

// listen to change event, forward data to a higher level component (expense component) and store component in state 