import React from 'react';
import EditButton from '../edit-button/EditButton';
import { employee } from '../../dummy-data-object/dummy-data-object';
import TextBox from '../text-box/TextBox';
//import KxCard from '../card/card';
//import { DatePicker } from '../../../node_modules/@material-ui/pickers/DatePicker/DatePicker';
function ApplicationView() {

    return (
        <div className="flex-application-container">

            <h1 className="flex-application-summary-header"> Application Summary </h1>
            <TextBox name="Name" input={employee.name} />
            <TextBox name="Employee ID" input={employee.employeeCode} />
            <TextBox name="Voucher No." input={employee.voucherNo} />
            <TextBox name="Date" input={employee.date} />
            <img src={employee.imgSrc} />
            <EditButton />

        </div>

    )
}
export default ApplicationView;