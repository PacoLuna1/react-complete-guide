import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};
