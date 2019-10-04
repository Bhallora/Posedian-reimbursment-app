import React, { Fragment } from 'react';
import EditButton from '../edit-button/EditButton';
import { employees, employee1 } from '../../data-object/data-object';
import TextBox from '../text-box/TextBox';
import './application-view.scss';
import { fetchPost } from "../../actions/fetch-post.action";
import image from '../../data-object/hotel-bill-format-in-india-7.jpg';
import { connect } from 'react-redux';
//import KxCard from '../card/card';
//import { DatePicker } from '../../../node_modules/@material-ui/pickers/DatePicker/DatePicker';
class ApplicationView extends React.Component {
    // componentDidMount() {
    // this.props.fetchPost()
    // }
    render() {
        return (

            <div className="flex-application-container-noneditable">

                <h1 className="flex-application-summary-header"> Application Summary </h1>
                {/* {this.props.error && <p>{this.props.error}</p>} */}

                <TextBox disabled label="Name" input={this.props.data || this.props.data.name} />
                <TextBox disabled label="Employee Code" input={this.props.data.employeeCode} />
                <TextBox disabled label="Voucher No." input={this.props.data.voucherNo} />
                <TextBox disabled label="Date of filing" input={this.props.data.date} />
                <TextBox disabled label="Department" input={this.props.data.department} />
                <TextBox disabled label="Division" input={this.props.data.division} />
                <TextBox disabled label="Expense Date" input={this.props.data.expenseDate} />
                <TextBox disabled label="Expense Date" input={this.props.data.expenseDetail} />
                <TextBox disabled label="Expense Amount" input={this.props.data.amount} />

                <img src={image} width="500px" height="780px" label="Bill Image" />

                <EditButton />

            </div>

        )
    }
}

const mapStatetoProps = (state) => {
    return { data: state.data, error: state.error }
}
const mapDispatchprops = (dispatch) => {
    return { onFETCH_POST: () => dispatch(fetchPost()) }
}
export default connect(mapStatetoProps, mapDispatchprops)(ApplicationView);