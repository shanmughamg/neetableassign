import React from 'react';

const ExpenseDate = (props) => {
  const month ="march"; //props.date;
  const day = 10//props.date;
  const year = 2022//props.date;

  return (
    <div class="d-block">
      <div class="d-block">{month}</div>
      <div class="d-block">{year}</div>
      <div class="d-block">{day}</div>
    </div>
  );
};

export default ExpenseDate;