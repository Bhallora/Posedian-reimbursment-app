import React from 'react';
import KxCard from '../card/card';
import ApplicationsView from '../applications-view/ApplicationsView';





class ViewApplication extends React.Component {

    render() {

        return (<KxCard className='KxCard-container'>

            <ApplicationsView/>
        </KxCard>
            
        );
    }
}
export default ViewApplication;