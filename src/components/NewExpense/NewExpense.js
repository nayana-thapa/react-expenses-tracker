import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [ addExpense, setAddExpense ]= useState(false);

  const saveExpenseHandler = () => {
    setAddExpense(true);
  }

  const stopExpenseHandler = () => {
    setAddExpense(false);
  }


  const expenseDataHandler = (enteredExpenses) => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString(),
    };
    props.newExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!addExpense && <button onClick={saveExpenseHandler}>Add Expense</button>}
      {addExpense && <ExpenseForm onSave={expenseDataHandler}  onCancel = {stopExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
