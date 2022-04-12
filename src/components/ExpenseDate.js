import React from 'react';

const ExpenseDate = (props) => {
    const dates=new Date(props.date);
  //const month =dates.getMonth();
  const day = dates.getDay();//props.date;
  const year = dates.getFullYear();//props.date;
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  //const d = new Date();
  let months = month[dates.getMonth()];
  
  return (
    <div class="btn-dark col-2 rounded">
      <div class="flex-grow-1">{months}</div>
      <div class="flex-grow-1">{year}</div>
      <div class="flex-grow-1">{day}</div>
    </div>
  );
};

export default ExpenseDate;