import React from 'react';
import TextBox from '../text-box/TextBox';
import SaveButton from '../save-button/SaveButton';
import EditButton from '../edit-button/EditButton';
import './basic-info.scss';
import NextButton from '../next-button/NextButton';


export default function BasicInfo() {
    return (
        <form className="flex-basic-info-form">
            <div className="flex-basic-info">

                <TextBox name='Name' />
                <TextBox name='Employee ID' /> </div>

            <div className='flex-basic-info-button'>
                <EditButton />
                <SaveButton />
            </div>

        </form>

    );
}