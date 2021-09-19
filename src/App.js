import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./Footer";

const dummyData = [
  {
    id: "e1",
    title: "Electricity Bill",
    amount: 4000,
    date: new Date("2019-11-2"),
  },
  {
    id: "e2",
    title: "Big Basket",
    amount: 7500,
    date: new Date("2019-11-5"),
  },
  {
    id: "e3",
    title: "Rent",
    amount: 50000,
    date: new Date("2020-09-10"),
  },
  {
    id: "e4",
    title: "Water Bill",
    amount: 1000,
    date: new Date("2021-05-12"),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

  const newExpenseHandler = (pushedExpense) => {
    setExpenses((prevExpenses) => {
      return [pushedExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense newExpense={newExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
};

export default App;
