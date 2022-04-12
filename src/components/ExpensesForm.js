import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (


        <div class="cover-caption">
            <div class="container-fluid">
                <div class="">
                    <div class="col-sm-10 offset-sm-1 text-center">
                        <h1 class="display-3">RedBytes </h1>
                        <div class="form">
                            <form action="" class="form-inline justify-content-center" onSubmit={submitHandler}>
                                <div class="form-group">
                                    <label>Title</label>
                                    <input
                                        type='text'
                                        value={enteredTitle}
                                        onChange={titleChangeHandler}
                                    /></div>
                                <br />
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input
                                        type='number'
                                        min='0.01'
                                        step='0.01'
                                        value={enteredAmount}
                                        onChange={amountChangeHandler}
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label>Date</label>
                                    <input
                                        type='date'
                                        min='2019-01-01'
                                        max='2022-12-31'
                                        value={enteredDate}
                                        onChange={dateChangeHandler}
                                    />
                                </div>
                                <br />
                                <button class="btn btn-danger align-content-end" type='submit'>Add Expense</button>

                            </form>
                        </div>



                    </div>
                </div>
            </div>
        </div>


    );
};

export default ExpenseForm;