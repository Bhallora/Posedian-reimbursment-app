import React, { Component } from 'react';
import './home.scss';
//import SaveButton from '../save-button/SaveButton';
//import DeleteButton from '../delete-button/DeleteButton';
//import EditButton from '../edit-button/EditButton';


class Home extends Component {
    render() {
        return (

            <div className="Home">

                <div className='Title'>
                    <div> <p className="Home-content-first"> TIRED of tons of PAPERWORKS ? </p></div>
                    <div><p className="Home-content-second">You are at the right place!</p></div>
                    <div><p id="logo">PayMe </p></div>
                    <div> <p className="Home-content-second">{/*<span className="quote">"</span>*/} Helping cool employees, to maintain their cool through hasslefree<span id="highlight">REIMBURSEMENT</span>filing.{/*<span className="quote">"</span>*/}</p></div>
                </div>


            </div>


        );
    }
}
export default Home;