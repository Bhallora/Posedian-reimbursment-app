import React from 'react';
import EditButton from '../edit-button/EditButton';
import { employees, employee1 } from '../../data-object/data-object';
import TextBox from '../text-box/TextBox';
import './application-view.scss';
import image from '../../data-object/hotel-bill-format-in-india-7.jpg'
//import KxCard from '../card/card';
//import { DatePicker } from '../../../node_modules/@material-ui/pickers/DatePicker/DatePicker';
function ApplicationView(props) {

    return (

        <div className="flex-application-container-noneditable">

            <h1 className="flex-application-summary-header"> Application Summary </h1>
            <TextBox disabled label="Name" input={employees[0].name} />
            <TextBox disabled label="Employee Code" input={employees[0].employeeCode} />
            <TextBox disabled label="Voucher No." input={employees[0].voucherNo} />
            <TextBox disabled label="Date of filing" input={employees[0].date} />
            <TextBox disabled label="Department" input={employees[0].department} />
            <TextBox disabled label="Division" input={employees[0].division} />
            <TextBox disabled label="Expense Date" input={employees[0].expenseDate} />
            <TextBox disabled label="Expense Date" input={employees[0].expenseDetail} />
            <TextBox disabled label="Expense Amount" input={employees[0].amount} />

            <img src={image} width="500px" height="780px" label="Bill Image" />

            <EditButton />

        </div>

    )
}
export default ApplicationView;