import React from 'react'
import { Field, reduxForm } from 'redux-form'
//import validate from '../validate/validate'
//import renderField from '../render-field/renderField'
//import TextBox from '../../text-box/TextBox';
import NextButton from '../../next-button/NextButton';
import './wizard-form-first-page.scss';
import KxCard from '../../card/card';
import { TextField } from '@material-ui/core';


const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'employeeCode'
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
/>
  )

{/*<TextField
              name="name"
              label="Name"
              type="text"
              component={renderField}
            //  label="Name"
            />

            <TextBox
              label="Employee Code"
              type="text"
              component={renderField}
              // label="Employee Code"
              name="employeeCode"
/>*/}

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-container-page-1">
        <KxCard className="flex-KxCard-page-1">
          <div className="flex-form-content-and-button">
            <div> <p className="heading1">Basic Information </p></div>
            <div>
              <Field
                name="name"
                component={renderTextField}
                label="Name"
              />
            </div>
            <div>
              <Field name="employeeCode" component={renderTextField} label="Employee Code" />
            </div>



            <div className="flex-button-container-page-1">
              <NextButton className="next" label="Next" />


            </div>
          </div>
        </KxCard>
      </div>
    </form>

  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage)