import React from 'react';
import './applications-view.scss';
import { HashRouter, NavLink } from 'react-router-dom';
import { employees } from '../../dummy-data-object/dummy-data-object';

class ApplicationsView extends React.Component {
    constructor(props) {
        super(props)
    }
    renderTableHeader() {
        let header = Object.keys(this.props.applications[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData() {
        return this.props.applications.map((application, index) => {

            return (
                <tr key={index}>

                    <td> {application.name}</td>
                    <td>{application.employeeCode}</td>
                    <td>{application.voucherNo}</td>
                    <td>{application.date}</td>
                </tr>
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