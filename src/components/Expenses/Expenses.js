import { Card } from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExtraFiles/ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpenseChart";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onSelectYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectYear={onSelectYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
