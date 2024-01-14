const ExpenseDate = (props)=>{
  const dateConfig = (config) => {
    return props.date.toLocaleString("en-US", config);
  };
  const month = dateConfig({ month: "long" });
  const day = dateConfig({ day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
