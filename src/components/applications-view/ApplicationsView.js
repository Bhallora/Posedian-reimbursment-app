import React from 'react';
import './applications-view.scss';
import { HashRouter, NavLink } from 'react-router-dom';

class ApplicationsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [

                {id: 1,  name: 'Pallab', date: '06-02-2019', Expenses: "50000" },
                {id: 2,  name: 'pruis', date: '05-09-2019', Expenses: "40000" },
                {id: 3,  name: 'prenzo', date: '08-09-2019', Expenses: "90000" }

            ]

        }
    }
    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData() {
        return this.state.employees.map((employee, index) => {
            const { name, date, Expenses } = employee
            return (<HashRouter>
                <tr key={name}>
                    <td>    <NavLink to='/application-view' className="clicker">{name}</NavLink></td>
                    <td>{date}</td>
                    <td>{Expenses}</td>
                </tr></HashRouter>
            )
        })

    }
    render() {
        return (<div className="flex-table-container">
            <h1 id='title'> Employees Application Table </h1>
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