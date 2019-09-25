import React from 'react';
import EditButton from '../edit-button/EditButton';
import { employees } from '../../data-object/data-object';
import TextBox from '../text-box/TextBox';
//import KxCard from '../card/card';
//import { DatePicker } from '../../../node_modules/@material-ui/pickers/DatePicker/DatePicker';
function ApplicationView(index) {

    return (

        <div className="flex-application-container">

            <h1 className="flex-application-summary-header"> Application Summary </h1>
            <TextBox label="Name" input={employees.name} />
            <TextBox label="Employee Code" input={employees.employeeCode} />
            <TextBox label="Voucher No." input={employees.voucherNo} />
            <TextBox label="Date of filing" input={employees.date} />
            <TextBox label="Department" input={employees.department} />
            <TextBox label="Division" input={employees.division} />
            <TextBox label="Expense Date" input={employees.expenseDate} />
            <TextBox label="Expense Amount" input={employees.expenseAmount} />

            <EditButton />

        </div>

    )
}
export default ApplicationView;