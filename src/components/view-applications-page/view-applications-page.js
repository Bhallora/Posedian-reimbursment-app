import React from 'react';
import KxCard from '../card/card';
import ApplicationsView from '../applications-view/ApplicationsView';
import './view-applications-page.scss';
import { Route, HashRouter } from 'react-router-dom';
import ApplicationView from '../application-view/ApplicationView';





class ViewApplication extends React.Component {

    render() {

        return (<div className='KxCard-container'>
            <HashRouter>
                <KxCard className='KxCard-content'>
                    <Route exact path={`${this.props.match.url}`} component={ApplicationsView} />
                    <Route path={`${this.props.match.url}/:id`} component={ApplicationView} />
                </KxCard>
            </HashRouter>
        </div>

        );
    }
}
export default ViewApplication;