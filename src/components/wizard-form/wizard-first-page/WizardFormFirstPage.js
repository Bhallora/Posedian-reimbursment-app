import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import renderField from '../render-field/renderField'
import TextBox from '../../text-box/TextBox';
import NextButton from '../../next-button/NextButton';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <TextBox
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
      />
      <div>
        <NextButton className="next" />


      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validate
})(WizardFormFirstPage)