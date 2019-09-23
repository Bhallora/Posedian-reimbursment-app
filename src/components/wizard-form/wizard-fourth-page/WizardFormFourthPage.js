import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import SubmitButton from '../../submit-button/SubmitButton';
import PrevButton from '../../prev-button/PreviousButton';
import KxCard from '../../card/card';
import './wizard-form-fourth-page.scss';



const WizardFormFourthPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-container-page-4">
        <KxCard className="flex-KxCard-page-4">
          <div className="flex-form-content-and-button">
            <div className="previous">  <PrevButton type="button" onClick={previousPage}>
            </PrevButton> </div>
            <div> <p className="heading4">Upload Bills</p></div>
            <div className="flex-button-container-page-3">
              <SubmitButton type="submit" disabled={pristine || submitting} />
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
})(WizardFormFourthPage)