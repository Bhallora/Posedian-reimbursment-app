import React from 'react'
import { Field, reduxForm } from 'redux-form'
//import validate from '../validate/validate'
//import renderField from '../render-field/renderField'
//import TextBox from '../../text-box/TextBox'
//import DatePicker from '../../date-box/DateBox'
import DatePicker, { formatDates, normalizeDates } from '../../date-box/DatePicker';
import PrevButton from '../../prev-button/PreviousButton';
import NextButton from '../../next-button/NextButton';
import KxCard from '../../card/card';
import './wizard-form-second-page.scss';
import Filter1Icon from '@material-ui/icons/Filter1';
import { TextField } from '@material-ui/core';
// import { DatePicker } from 'material-ui/DatePicker';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import {moment } from 'moment';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'voucherNo',

    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    }); return errors
}
const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (<TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
/>)
// const renderDateField = ({ label, input }) => (<div><DatePicker label={label} {...input} /></div>)

// const renderDatePicker = () => (

//         <div>
//             <label> Date of Filing </label>
//             <div>   <DatePickerComponent   /> </div>
//         </div>

// );{...input} 


// {touched && error && <span className="error_field">{error}</span>}











//const renderError = ({ meta: { touched, error } }) =>
// touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-container-page-2">
                <KxCard className="flex-KxCard-page-2">

                    <div className="flex-form-content-and-button">
                        <div> <p className="heading2">Expense Details <span id="icon"> <Filter1Icon /></span></p></div>



                        {/*  <TextBox
                            name="voucherNo"
                            label="Voucher No."
                            type="text"
                      component={renderField} />*/}

                        <Field
                            name="voucherNo"
                            component={renderTextField}
                            label="Voucher No."
                        />

                        <div className="datepicker-container" > <Field
                            name={'dateOfFiling'}
                            component={DatePicker}
                            placeholder="Date of Filing"
                            
                            parse={normalizeDates}
                            format={formatDates}
                        /></div>



                        {/* <Field name="date" component={renderDateField} label="Date of Filing" /> */}
                        {/* <label> */}
                        {/* <Field name="sex" component="input" type="radio" value="male" />{' '} */}
                        {/* Male */}
                        {/* </label> */}
                        {/* <label>
                        <Field name="sex" component="input" type="radio" value="female" />{' '}
                        Female
          </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="other" />{' '}
                        Other */}
                        {/* </label>
                    <Field name="sex" component={renderError} />
                </div> */}


                        <div className="flex-button-container-page-2">
                            <PrevButton type="button" onClick={previousPage} />
                            <NextButton className="next" label="Part 2" />


                        </div>
                    </div>
                </KxCard>
            </div>
        </form>

    )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate
})(WizardFormSecondPage)