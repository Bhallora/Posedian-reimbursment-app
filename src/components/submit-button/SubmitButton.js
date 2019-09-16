import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Publish from '@material-ui/icons/Publish';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: 12,
        backgroundColor: '#00e676',
        color: "white",
        fontFamily: 'Arsenal, sans-serif',
        ' &:hover': {

            backgroundColor: '#00e676',

        },
    }, rightIcon: {
        marginLeft: theme.spacing(0.2),
    },
    iconSmall: {
        fontSize: 15,
    },

}));
export default function SubmitButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button variant='contained' color='default' size="small" className={classes.button}>Submit<Publish className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
        </div>
    );
}
