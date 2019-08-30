import React, { Component } from 'react';
import KxIcon from '../kx-icon/KxIcon'

class NavItems extends Component {
    render() {
        return (
            <ul className="kx-tree kx-is-root">
                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={0}>
                    <a href="#" className="kx-tree__link">

                        <ul type='none'>

                            <li>  <KxIcon icon="box"></KxIcon> <span className="kx-tree__link__txt">Home</span></li>
                            <li>  <KxIcon icon="box"></KxIcon> <span className="kx-tree__link__txt">View Applications</span></li>
                            <li>  <KxIcon icon="box"></KxIcon> <span className="kx-tree__link__txt">New Entry</span></li>
                            <li>  <KxIcon icon="box"></KxIcon><span className="kx-tree__link__txt">Log Out </span></li>
                        </ul>
                    </a>
                </li>
                {this.props.children}
            </ul>
        )
    }
}

export default NavItems;