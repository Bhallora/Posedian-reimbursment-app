import React from 'react';
import './applications-view.scss';
import { HashRouter, NavLink } from 'react-router-dom';
import { employees } from '../../dummy-data-object/dummy-data-object';

class ApplicationsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { employees }


    }
    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData() {
        return this.state.employees.map((employees, index) => {

            return (
                <tr key={index}>

                    <td> {employees.name}</td>
                    <td>{employees.employeeCode}</td>
                    <td>{employees.voucherNo}</td>
                    <td>{employees.date}</td>
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