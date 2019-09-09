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
        <div>
            <Button variant='contained' color='default' size="small" className={classes.button}>Next<NavigateNext className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
        </div>
    );
}
