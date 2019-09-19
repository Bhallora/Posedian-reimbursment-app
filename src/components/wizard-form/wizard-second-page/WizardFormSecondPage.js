import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import renderField from '../render-field/renderField'
import TextBox from '../../text-box/TextBox'
import DatePicker from '../../date-box/DateBox'

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            {/* <Field name="email" type="email" component={renderField} label="Email" />*/}
            <div>
                <TextBox
                    name="voucherNo"
                    label="Voucher No."
                    type="text"
                    component={renderField} />
                <div>
                    <div>
                        <DatePicker /> </div>
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
                </div>
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
        </button>
                <button type="submit" className="next">
                    Next
        </button>
            </div>
        </form>

    )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate:validate
})(WizardFormSecondPage)