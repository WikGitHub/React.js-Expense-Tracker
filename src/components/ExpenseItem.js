import './ExpenseItem.css'


function ExpenseItem() {
  return (
    <div className="expense-item">
      <idv>Date</idv>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
