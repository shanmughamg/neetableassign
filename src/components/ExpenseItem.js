import React from 'react';

import ExpenseDate from './ExpenseDate';

import { Table } from 'react-bootstrap';

const ExpenseItem = (props) => {
    return (
        <Table class="table table-striped table-condensed table-bordered">
            
            <tbody class="toast-body">
                <tr class="col">
                    <td  class="col col-5"><ExpenseDate date={props.date} /></td>
                    <td class="col col-7 btn-group-vertical"><h5>{props.title}</h5></td>
                    <td class=" col col-3 btn-warning text-center">${props.amount}</td>


                </tr>
            </tbody>
        </Table>

    );
}

export default ExpenseItem;