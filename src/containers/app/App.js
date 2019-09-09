import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Main from '../../components/main/Main';
//import ConfigApp from '../config-app/ConfigApp';
import ViewApplication from '../../components/view-application-page/view-application-page'
import { connect } from 'react-redux';
import { toggleSideNav } from '../../actions/page.action'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../../components/home-page/home-page'
import NewEntry from '../../components/new-entry-page/new-entry-page'
//import SimpleCard1 from '../../components/card-table/CardTable';




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

              <Route path="/new-entry" component={NewEntry} />
              {/* <Route path='/components/view-application-page/view-application-page' component={ViewApplication} />
    <Route path='/components/card-table/CardTable' component={SimpleCard1} />*/}

            </Main>
          </ HashRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})
export default connect(mapStateToProps, { toggleSideNav })(App);
