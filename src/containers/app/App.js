import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Main from '../../components/main/Main';
//import ConfigApp from '../config-app/ConfigApp';
import ViewApplication from '../../components/view-applications-page/view-applications-page'
import { connect } from 'react-redux';
import { toggleSideNav } from '../../actions/page.action'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../../components/home-page/home-page'
import NewEntry from '../../components/new-entry-page/new-entry-page'
//import SimpleCard1 from '../../components/card-table/CardTable';
import ApplicationsView from '../../components/applications-view/ApplicationsView';
import ApplicationView from '../../components/application-view/ApplicationView';
import { createApplication } from '../../actions/create-application.action';
import WizardForm from '../../components/wizard-form/wizard-complete-form/wizard-complete-form'
import { formReducer } from 'redux-form'
import showResults from '../../components/wizard-form/show-results/showResults';




class App extends Component {
  render() {
    let pageClasses = ["kx-page"];
    if (this.props.page.sidenav.isActive) {
      pageClasses.push('kx-is-locked');
    }

    return (
      <div className={pageClasses.join(' ')}>
        <div className="kx-page__canvas kx-flex kx-justify-content-start kx-align-items-start">
          <Header page={this.props.page} toggleSideNav={this.props.toggleSideNav}></Header>
          <Nav page={this.props.page}>

          </Nav>
          <HashRouter>
            <Main page={this.props.page} toggleSideNav={this.props.toggleSideNav}>
              <Route exact path="/" component={Home} />

              <Route path="/new-entry" render={(props) => <WizardForm /*{...props} createApplication={this.props.createApplication}*/ onSubmit={showResults}></WizardForm>} />

              <Route path="/view-applications" render={(props) => <ViewApplication {...props} applications={this.props.applications} />} />
              {/* <Route path='/components/card-table/CardTable' component={SimpleCard1} />*/}

            </Main>
          </ HashRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  applications: state.applications
})
export default connect(mapStateToProps, { toggleSideNav, createApplication })(App);
