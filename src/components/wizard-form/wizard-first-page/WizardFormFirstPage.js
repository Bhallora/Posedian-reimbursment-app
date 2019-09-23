import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import renderField from '../render-field/renderField'
import TextBox from '../../text-box/TextBox';
import NextButton from '../../next-button/NextButton';
import './wizard-form-first-page.scss';
import KxCard from '../../card/card';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-container-page-1">
        <KxCard className="flex-KxCard-page-1">
          <div className="flex-form-content-and-button">
            <div> <p className="heading">Basic Information </p></div>


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

            <div className="flex-button-container-page-1">
              <NextButton className="next" />


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
  validate: validate
})(WizardFormFirstPage)