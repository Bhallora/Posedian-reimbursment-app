import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import NextButton from '../../next-button/NextButton';
import PreviousButton from '../../prev-button/PreviousButton'
//import SelectField from ' @material-ui/core/SelectField';
import TextBox from '../../text-box/TextBox'
const divisions = ['Digital Platform', 'Oil & Drilling', ' Product & Services']
const departments = ['Engineering', 'HR', 'Admin', 'Finance', 'IT']

const renderDivisionsSelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Division</option>
            {divisions.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)
const renderDepartmentSelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Department</option>
            {departments.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)
const WizardForm3rdPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>

                <Field name="division" component={renderDivisionsSelector} />
                <Field name="department" component={renderDepartmentSelector} />
                <TextBox name="expenseDetail" label="Expense Detail" />
                <TextBox label="Amount" type="numeric" name="amount" />
                <NextButton className='next' />
                <PreviousButton onClick={previousPage} className='previous' />
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate
})(WizardForm3rdPage)