import React from 'react';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div class="dropdown">
      <div class="alert">
        <label>Filter by year</label>
        <select class="dropdown  d-grid dropdown-menu-dark" value={props.selected} onChange={dropdownChangeHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;