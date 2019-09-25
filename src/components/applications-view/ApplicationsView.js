import React from 'react';
import './applications-view.scss';
import { HashRouter, NavLink } from 'react-router-dom';
import { employees, employee1 } from '../../data-object/data-object';

class ApplicationsView extends React.Component {
    constructor(props) {
        super(props)
    }
    renderTableHeader() {
        let header = Object.keys(employee1)
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData() {
        return this.props.applications.map((application, index) => {

            return (<HashRouter>
                <tr key={index}>

                    <td> <NavLink to={`${this.props.match.url}/:key`}>{application.name}</NavLink ></td>
                    <td>{application.employeeCode}</td>
                    {/* <td>{application.voucherNo}</td> */}
                    <td>{application.date}</td>
                </tr>
            </HashRouter>
            )
        })

    }
    render() {
        return (<div className="flex-table-container">
            <div id='title'> Applications </div>
            <table id="flex-table">
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>

            </table>
        </div>
        )
    }
};
export default ApplicationsView;