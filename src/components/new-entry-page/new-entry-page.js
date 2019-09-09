import React from 'react';
import KxCard from '../card/card';
import BasicInfo from '../basic-info/BasicInfo';
class NewEntry extends React.Component {
    render() {
        const employee = {
            basicInfo: {

            }
        }

        const getStepComponent = (step) => {
            switch (step) {
                case 1:
                    return (<BasicInfo />);

                case 2:
                // return (<ExpenseDetail />);

                case 3:
                // return (<BillsImages />);

                default:
                    return (<BasicInfo />);

            }
        }


        return (

            <div className="display1">

                <KxCard>
                    {getStepComponent(1)}
                </KxCard>






            </div>);
    }
}

export default NewEntry;