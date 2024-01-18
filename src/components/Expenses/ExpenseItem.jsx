import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const formatAmount =  new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "NGN", // Fallback to USD if currency symbol is not available
  }).format(props.amount);
 

  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{formatAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
