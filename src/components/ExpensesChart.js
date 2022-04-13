import Chart from "./Chart";
const ExpensesChart = (props) => {
   const chardatapoin=[
       {label :'jan',value :0},
       { label :'feb',value :0},
       {label :'mar',value :0},
       { label :'apr',value :0},
       {label :'may',value :0},
       { label :'jun',value :0},
       { label :'jul',value :0},
       {label :'aug',value :0},
       { label :'sep',value :0},
       {label :'oct',value :0},
       { label :'nov',value :0},
       { label :'dec',value :0}
    ];
for(const expense of props.expense)
{
    const expmonth=expense.date.getMonth();
    chardatapoin[expmonth].value+=expense.amount;
}
    return (
<Chart datapoints={chardatapoin} />
    );
}

export default ExpensesChart;