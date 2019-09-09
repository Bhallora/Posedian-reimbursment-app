import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBefore from '@material-ui/icons/NavigateBefore';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: 12,
        backgroundColor: '#1a293e',
        color: "white",
        ' &:hover': {

            backgroundColor: '#1a293e',

        },
    }, leftIcon: {
        marginRight: theme.spacing(0.2),
    },
    iconSmall: {
        fontSize: 15,
    },

}));
export default function PrevButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button onClick={props.onClick} variant='contained' color='default' size="small" className={classes.button}><NavigateBefore className={clsx(classes.leftIcon, classes.iconSmall)} /> Prev
            </Button>
        </div>
    );
}
