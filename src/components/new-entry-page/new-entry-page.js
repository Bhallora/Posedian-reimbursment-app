import React from 'react';
import KxCard from '../card/card';
import BasicInfo from '../basic-info/BasicInfo';
import ExpenseDetail from '../expense-detail/ExpenseDetail';
import UploadBills from '../upload-bills/UploadBills';
import NextButton from '../next-button/NextButton';
import PrevButton from '../prev-button/PreviousButton';
//import NameTag from '../name-tag/NameTag';
import './new-entry-page.scss';
//import { employee } from '../../dummy-data-object/dummy-data-object';
//import EditButton from '../edit-button/EditButton';
import { EditInfo } from '../basic-info/BasicInfo';
import SaveButton from '../save-button/SaveButton';
import SubmitButton from '../submit-button/SubmitButton';
import { createApplication } from '../../actions/create-application.action';

class NewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            counter: 1
        };
    }

    handleIncrement = () => {
        this.setState({ step: this.state.step + 1 });

    }
    handleDecrement = () => {
        this.setState({ step: this.state.step - 1 });
    }
    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }


    render() {

        //  const employee = {
        //  basicInfo: {

        // }
        //  }
        // var step = 0;
        const getStepComponent = (step, counter) => {
            switch (step) {
                case 1:
                    if (this.state.counter % 2 !== 0)
                        return (<BasicInfo />);
                //   else
                //   return (<EditInfo />);



                case 2:
                    return (<ExpenseDetail />);

                case 3:
                    return (<UploadBills />);

                default:
                    return (<BasicInfo />);

            }
        }
        {/*const showEdit = (counter) => {
            if (counter % 2 != 0)
                return (null);
            else
                return (<EditInfo />);
        }*/}










        if (this.state.step === 3) {
            return (

                <div className="display1">

                    <KxCard>
                        <div id='new-entry-page-name-tag'>
                            Upload Bills
                        </div>
                        {getStepComponent(this.state.step)}
                        <div className='new-entry-page-buttons'>
                            <PrevButton onClick={this.handleDecrement} />
                            <SaveButton />
                            <SubmitButton onClick={() => this.props.createApplication({ test: 'hello' })} />
                        </div>
                    </KxCard>






                </div>);
        }
        if (this.state.step === 1) {
            return (


                <div className="display1">

                    <KxCard>
                        <div id='new-entry-page-name-tag'>
                            Basic Information
                        </div>


                        {/* {showEdit(this.state.counter)} */}


                        {getStepComponent(this.state.step)}
                        <div className='new-entry-page-buttons'>
                            <SaveButton />
                            <NextButton onClick={this.handleIncrement} />
                        </div>
                        {/* <EditButton onClick={this.handleClick} /> */}

                    </KxCard>
                </div>
            );
        }
        else return (

            <div className="display1">

                <KxCard className='kx-card'>
                    <div id='new-entry-page-name-tag'>
                        Expense Detail
                    </div>
                    {getStepComponent(this.state.step)}
                    <div className='new-entry-page-buttons'>
                        <PrevButton onClick={this.handleDecrement} />
                        {/* <EditButton onClick={this.showEdit} /> */}
                        <SaveButton />
                        <NextButton onClick={this.handleIncrement} />
                    </div>
                </KxCard>
            </div>);



    }
}


export default NewEntry;