import React, { Component } from 'react';
import './header.scss';
import LockOpen from '@material-ui/icons/LockOpen';
import Info from '@material-ui/icons/Info';

class Header extends Component {
    render() {
        let headerClasses = ["kx-page__header", "kx-flex"];
        let navTogglerClasses = ["kx-btn kx-hamburger kx-hamburger--spin kx-header__nav-toggle kx-js-header__nav-toggle"]

        if (this.props.page.sidenav.isActive) {
            headerClasses.push('kx-has-nav-open');
            navTogglerClasses.push('kx-is-active');
        }

        return (
            <div className={headerClasses.join(' ')}>
                <header className="kx-header kx-flex kx-align-items-center" role="banner">
                    <button className={navTogglerClasses.join(' ')} onClick={() => this.props.toggleSideNav()}>
                        <span className="kx-hamburger__inner">
                            <span className="kx-hamburger__icon" />
                        </span>
                        <span className="kx-hamburger__txt kx-is-vishidden">Menu</span>
                    </button>
                    <a href="#" className="kx-header__title" >
                        PayMe
                    </a>
                    <div className="kx-header__tools">
                        {/* TODO: log out and other options */}
                     {/* <button type="button">About Us<Info></Info></button>  */}
                     {/* <button type="button">Log in<LockOpen></LockOpen></button>  */}
                        </div>

                    
                </header>
            </div>
        )
    }
}

export default Header;