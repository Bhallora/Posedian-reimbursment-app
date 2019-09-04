import React from 'react';
import SimpleCard from '../card/card';
import SimpleCard1 from '../card-table/CardTable';
import { HashRouter, Route } from 'react-router-dom';
class NewEntry extends React.Component {
    render() {
        return (

            <HashRouter>
                <div className="display1">

                    <SimpleCard name="Employee Information" />











                </div></HashRouter>
        )
    }
}
export default NewEntry;