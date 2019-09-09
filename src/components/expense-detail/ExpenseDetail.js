import React from 'react';
import TextBox from '../text-box/TextBox';
import ExpenseTable from '../expense-table/ExpenseTable';
import SaveButton from '../save-button/SaveButton';
import DatePicker from '../date-box/DateBox';

export default function ExpenseDetail() {
    return (
        <div className='flex-expense-detail'>
            <form className='flex-expense-detail-form'>
                <TextBox name="Voucher No." />
                <DatePicker />
                <ExpenseTable />
                <SaveButton />

            </form>
        </div>
    )
}