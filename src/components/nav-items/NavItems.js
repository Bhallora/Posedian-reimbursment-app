import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import KxIcon from '../kx-icon/KxIcon'
import Visibility from '@material-ui/icons/Visibility';
import Home from '@material-ui/icons/Home';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Create from '@material-ui/icons/Create';
import './nav-item.scss'

class NavItems extends Component {
    render() {
        return (
            <ul className="kx-tree kx-is-root">
                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={0}>
                    <HashRouter>

                        <ul type='none'>

                            <li className="kx-tree__link__txt__list">  <Home></Home> <NavLink exact to='/' className="kx-tree__link__txt" >Home</NavLink></li>
                            <li className="kx-tree__link__txt__list">  <Visibility></Visibility> <NavLink to='/view-applications' className="kx-tree__link__txt">View Applications</NavLink></li>
                            
                            <li className="kx-tree__link__txt__list">  <Create></Create> <NavLink to="/new-entry" className="kx-tree__link__txt">New Entry</NavLink></li>
                            <li className="kx-tree__link__txt__list">  <ExitToApp></ExitToApp><span className="kx-tree__link__txt" > Log out</span></li>
                        </ul>
                    </HashRouter>

                </li>
                {this.props.children}
            </ul>
        )
    }
}

export default NavItems;