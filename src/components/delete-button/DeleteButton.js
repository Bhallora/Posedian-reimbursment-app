import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        size: 'small',
        fontSize: 12,
        backgroundColor: '#ff1744',
        color: "white",
        fontFamily: 'Arsenal, sans-serif',
        ' &:hover': {

            backgroundColor: '#ff1744',


        },
    },

    rightIcon: {
        marginLeft: theme.spacing(0.5),
    },
    iconSmall: {
        fontSize: 15,
    },
}));
export default function DeleteButton() {
    const classes = useStyles();
    return (
        <div>
            <Button variant='contained' color='default' size='small' className={classes.button}>Delete<DeleteIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
        </div>
    )
}
