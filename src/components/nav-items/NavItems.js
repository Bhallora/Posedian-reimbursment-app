import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import KxIcon from '../kx-icon/KxIcon'
import './nav-item.scss'

class NavItems extends Component {
    render() {
        return (
            <ul className="kx-tree kx-is-root">
                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={0}>
                    <HashRouter>

                        <ul type='none'>

                            <li className="kx-tree__link__txt__list">  <KxIcon icon="box"></KxIcon> <NavLink exact to='/' className="kx-tree__link__txt" >Home</NavLink></li>
                            <li className="kx-tree__link__txt__list">  <KxIcon icon="box"></KxIcon> <NavLink to='/components/view-application-page/view-application-page' className="kx-tree__link__txt">View Applications</NavLink></li>
                            <li className="kx-tree__link__txt__list">  <KxIcon icon="box"></KxIcon> <NavLink to='/components/new-entry-page/new-entry-page' className="kx-tree__link__txt">New Entry</NavLink></li>
                            <li className="kx-tree__link__txt__list">  <KxIcon icon="box"></KxIcon><span className="kx-tree__link__txt" >Log Out </span></li>
                        </ul>
                    </HashRouter>

                </li>
                {this.props.children}
            </ul>
        )
    }
}

export default NavItems;