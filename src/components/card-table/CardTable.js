import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { flexbox } from '@material-ui/system';
import TextBox from '../text-box/TextBox';
import './CardTable.scss';
import { bgcolor, flexbox, spacing } from '@material-ui/system';
import { TableRow } from '@material-ui/core';
import ExpenseTable from '../expense-table/ExpenseTable';
import DatePicker from '../date-box/DateBox';




//const useStyles = makeStyles({
//  card: {


// minWidth: 475,
/*    minHeight: 475,
    marginLeft: 420,
    marginTop: 150

},

title: {
    fontSize: 14,
},
pos: {
    marginBottom: 12,
},
button: {
    marginLeft: 500,
    background: '#1a293e',
    color: 'white'

},

content: {
    marginLeft: 11,
    marginTop: 30

},
Table: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',

},
ClassContainer: {
    display: 'flex',
    width: '100%',
    height: '100 %',
},
ContentTable: {
    marginright: 45,
    marginTop: 30,

}*/


//})

export default function SimpleCard1(props) {
    // const classes = useStyles();


    return (<div className="flex-container">
        <Card className='flex-card'>
            <CardContent className='content'>
                <Typography className="CardTitle" color="textSecondary" gutterBottom>
                    <h1> {props.name} </h1>
                </Typography>
                <ul type='none' className="flex-list">
                    <li className='flex-list-item'>   <TextBox name='Voucher No.' /></li>
                    <li className='flex-list-item'>  <TextBox name="Date" type='date' /></li>
                  
                    <li className='flex-list-item'> <DatePicker /></li>
                </ul>

            </CardContent>

            <CardActions >

                <div className='flex-button'>
                    <Button className='flex-button-content' size="small"><span className='flex-button-content'>Submit</span></Button>
                </div>

            </CardActions>

        </Card>
    </div>
    );
}