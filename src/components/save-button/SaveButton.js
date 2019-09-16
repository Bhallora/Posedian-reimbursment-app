import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: 12,
        //borderColor: 'black',
        color:'white',
        fontFamily: 'Arsenal, sans-serif',
       
        backgroundColor: '#1a293e',
        ' &:hover': {
            backgroundColor: '#1a293e',
            color:'white',
        },
        
    },

    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 15,
    },


}));
export default function SaveButton() {
    const classes = useStyles();
    return (

        <Button variant='contained' size='small' className={classes.button}>
            <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} /> Save
            </Button>
    );
}