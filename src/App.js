import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseContext from "./components/Context/Context";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };
  return (
    <div>
      <ExpenseContext.Provider value={{ expenses, addExpenseHandler }}>
        <NewExpense />
        <Expenses />
      </ExpenseContext.Provider>
    </div>
  );
};

export default App;
