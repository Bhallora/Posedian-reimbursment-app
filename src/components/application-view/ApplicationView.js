import React from 'react';
import EditButton from '../edit-button/EditButton';
import { employee1 } from '../../data-object/data-object';
import TextBox from '../text-box/TextBox';
//import KxCard from '../card/card';
//import { DatePicker } from '../../../node_modules/@material-ui/pickers/DatePicker/DatePicker';
function ApplicationView(props) {

    return (
        <div className="flex-application-container">

            <h1 className="flex-application-summary-header"> Application Summary </h1>
            <TextBox name="Name" input={employee1.name} />
            <TextBox name="Employee ID" input={employee1.employeeCode} />
            <TextBox name="Voucher No." input={employee1.voucherNo} />
            <TextBox name="Date" input={employee1.date} />

            <EditButton />

        </div>

    )
}
export default ApplicationView;