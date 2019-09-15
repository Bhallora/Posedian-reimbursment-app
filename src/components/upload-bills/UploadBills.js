import React, { Component } from 'react';
import BillsImageUpload from '../bills-image-upload/BillsImageUpload';
//import SaveButton from '../save-button/SaveButton';
//import DeleteButton from '../delete-button/DeleteButton';
import './upload-bills.scss';
import SubmitButton from '../submit-button/SubmitButton';
//import PreviousButton from '../prev-button/PreviousButton';




class UploadBills extends Component {
    render() {
        return (

            <form className="flex-upload-bills-form">
                <BillsImageUpload />
                <div className="flex-upload-bills-form-button">
                    {/* <DeleteButton /> */}
                    {/* <SaveButton /> */}
                    {/* <SubmitButton /> */}
                </div>



            </form>


        );
    }
}
export default UploadBills;