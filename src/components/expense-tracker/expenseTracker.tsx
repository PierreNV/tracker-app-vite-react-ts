import { useState } from "react";
import ExpenseForm from "./components/expenseForm";
import ExpenseFilter from "./components/expenseFilter";
import ExpenseList from "./components/expenseList";

const ExpenseTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 2, category: "Groceries" },
    { id: 2, description: "Bad day", amount: 100, category: "Parking fees" },
    { id: 3, description: "cinema", amount: 10, category: "Entertainment" },
  ]);

  const filteredExpenses = selectedCategory ? expenses.filter((expense) => expense.category === selectedCategory) : expenses;

  return (
    <>
      <div className="container text-center mb-5">
        <h1 className="">Expense Tracker</h1>
      </div>
      <div className="container mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
        <ExpenseList expenses={filteredExpenses} onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))} />
      </div>
    </>
  );
};

export default ExpenseTracker;
