import React, { Component } from 'react';
import './home.scss';
import SaveButton from '../save-button/SaveButton';
import DeleteButton from '../delete-button/DeleteButton';
import EditButton from '../edit-button/EditButton';

class Home extends Component {
    render() {
        return (
            <div className="Home">

                <div className='Title'>
                    <h1 className="Home-content"> Welcome To <span id="logo">PayMe</span> </h1>
                </div>


            </div>

        );
    }
}
export default Home;