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
                            <li className="kx-tree__link__txt__list">  <KxIcon icon="box"></KxIcon> <NavLink to='' className="kx-tree__link__txt">View Applications</NavLink></li>
                            <ul type="none">
                                <li className="kx-tree__link__txt__sublist"><KxIcon icon=""></KxIcon> <NavLink to='' className="kx-tree__link__txt__sub">Application 1</NavLink></li>
                                <li className="kx-tree__link__txt__sublist"><KxIcon icon=""></KxIcon><NavLink to='' className="kx-tree__link__txt__sub">Application 2</NavLink></li>
                            </ul>
                            <li className="kx-tree__link__txt__list">  <KxIcon icon="box"></KxIcon> <NavLink to="/new-entry" className="kx-tree__link__txt">New Entry</NavLink></li>
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