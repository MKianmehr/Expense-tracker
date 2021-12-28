import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
