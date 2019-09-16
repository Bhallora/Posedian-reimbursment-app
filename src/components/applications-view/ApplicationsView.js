import React from 'react';

class ApplicationsView extends React.Component {
    constructor(props){
        super(props)
        this.state={
            employees:[
                
                    { name:'Pallab', date:'06-02-2019',Expenses:"50000"},
                    {  name:'pruis', date:'05-09-2019',Expenses:"40000"},
                    {  name:'prenzo', date:'08-09-2019',Expenses:"90000"}
                
            ]
            
        }
    }
    renderTableHeader(){
        let header = Object.keys(this.state.employees[0])
        return header.map((key,index)=>{
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData(){
        return this.state.employees.map((employee,index)=>{
            const {name,date,Expenses}=employee
            return(
                <tr key={name}>
                    <td>{name}</td>
                    <td>{date}</td>
                    <td>{Expenses}</td>
                </tr>
            )
        })

    }
    render(){
    return( <div className="flex-table-container">
    <table className="flex-table">
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>

    </table>
</div>
    )
}};
export default ApplicationsView;