import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNext from '@material-ui/icons/NavigateNext';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: 12,
        backgroundColor: '#1a293e',
        color: "white",
        fontFamily: 'Arsenal, sans-serif',
        ' &:hover': {

            backgroundColor: '#1a293e',

        },
    }, rightIcon: {
        marginLeft: theme.spacing(0.2),
    },
    iconSmall: {
        fontSize: 15,
    },

}));
export default function NextButton(props) {
    const classes = useStyles();
    return (
        <Button variant='contained' type="submit" color='default' size="small" className={classes.button}>{props.label}<NavigateNext className={clsx(classes.rightIcon, classes.iconSmall)} />
        </Button>
    );
}