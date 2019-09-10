import React from 'react';
import TextBox from '../text-box/TextBox';
import ExpenseTable from '../expense-table/ExpenseTable';
import SaveButton from '../save-button/SaveButton';
import DatePicker from '../date-box/DateBox';
import NextButton from '../next-button/NextButton';
import PrevButton from '../prev-button/PreviousButton';
import './expense-detail.scss';

export default function ExpenseDetail() {
    return (
        <div className='flex-expense-detail-1'>
            <form className='flex-expense-detail'>
            <div className='flex-expense-detail-text-box'>
                <TextBox name="Voucher No." />
                <DatePicker /></div>
                <ExpenseTable />
                <div className='flex-expense-detail-button'>
                <SaveButton /></div>
            </form>
        </div>
    )
}