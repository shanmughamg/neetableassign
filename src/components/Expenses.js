import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteteredex = props.items.filter(expense => { return expense.date.getFullYear().toString() === filteredYear; })

    return (
        <div>
            <Card class="card">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expense={filteteredex}/>
                {filteteredex.length === 0 && <p>No expenses found . </p>}
                {filteteredex.length > 0 &&
                    filteteredex.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
            </Card>
        </div>
    );
};

export default Expenses;