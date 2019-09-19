import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from '../wizard-first-page/WizardFormFirstPage'
import WizardFormSecondPage from '../wizard-second-page/WizardFormSecondPage'
import WizardFormThirdPage from '../wizard-third-page/WizardFormThirdPage'
import WizardForm3rdPage from '../wizard-form-3rd-page/WizardForm3rdPage'

class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        return (
            <div>
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
                {page === 2 && (
                    <WizardFormSecondPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <WizardForm3rdPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 4 && (
                    <WizardFormThirdPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        )
    }
}

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default WizardForm