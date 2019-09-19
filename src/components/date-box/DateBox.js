import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
export default function DatePicker(props) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('1995-10-06'));

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label={props.name}
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        /></MuiPickersUtilsProvider>);
}