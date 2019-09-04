import React from 'react';
import MaterialTable from 'material-table';
import './Table.css';




export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Serial No.', field: 'serialNumber', type: 'numeric' },
            { title: 'Expense Date', field: 'expenseDate', type: 'date' },
            {
                title: 'Division', field: 'division', lookup: {
                    1: 'Oil & Drilling', 2: 'Digital Platform', 3: 'product & Services'
                }
            },
            {
                title: 'Department',
                field: 'department',
                lookup: { 1: 'Admin', 2: 'Finance', 3: 'HR', 4: 'IT', 5: 'Engineering' },
            },
            {
                title: "Detail of the expense",
                field: 'detailOfTheExpense',

            },
            {
                title: 'Amount',
                field: 'amount',
                type: 'numeric',
            }],
        data: [],
    });

    return (
        <MaterialTable className="material-table"
            title="Expense Table"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),
            }}
        />
    );
}
