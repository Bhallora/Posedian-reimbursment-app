import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';

//import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
//import Grid from '@material-ui/core/Grid';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import InputAdornment from '@material-ui/core/InputAdornment';

export default function TextBox(props) {

    return (
        <TextField
            className="text-box"
            id="input-with-icon-textfield"
            label={props.label}
            type={props.type}
            value={props.input}
            onChange={props.handleChange}
        />);




    {/* InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),


            }} */}
}