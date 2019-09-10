import React from 'react';
import KxCard from '../card/card';
import BasicInfo from '../basic-info/BasicInfo';
import ExpenseDetail from '../expense-detail/ExpenseDetail';
import UploadBills from '../upload-bills/UploadBills';
import NextButton from '../next-button/NextButton';
import PrevButton from '../prev-button/PreviousButton';
import './new-entry-page.scss';

class NewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { step: 1 };
    }

    handleIncrement = () => {
        this.setState({ step: this.state.step + 1 });

    }
    handleDecrement = () => {
        this.setState({ step: this.state.step - 1 });
    }

    render() {
        const employee = {
            basicInfo: {

            }
        }
        // var step = 0;
        const getStepComponent = (step) => {
            switch (step) {
                case 1:
                    return (<BasicInfo />);

                case 2:
                    return (<ExpenseDetail />);

                case 3:
                    return (<UploadBills />
                    );

                default:
                    return (<BasicInfo />);

            }
        }

        if (this.state.step == 3) {
            return (

                <div className="display1">

                    <KxCard>
                        {getStepComponent(this.state.step)}
                        <PrevButton onClick={this.handleDecrement} />
                    </KxCard>






                </div>);
        }
        if (this.state.step == 1) {
            return (


                <div className="display1">

                    <KxCard>
                        {getStepComponent(this.state.step)}
                        <NextButton onClick={this.handleIncrement} />
                    </KxCard>
                </div>
            );
        }
        else return (

            <div className="display1">

                <KxCard>
                    {getStepComponent(this.state.step)}
                    <div className='new-entry-page-buttons'>
                        <PrevButton onClick={this.handleDecrement} />
                        <NextButton onClick={this.handleIncrement} />
                    </div>
                </KxCard>
            </div>);
    }
}

export default NewEntry;