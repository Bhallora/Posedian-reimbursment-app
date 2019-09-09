import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: 12,
        backgroundColor: '#1a293e',
        ' &:hover': {

            backgroundColor: '#1a293e',

        },
    },

    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 15,
    },
}));
export default function DeleteButton() {
    const classes = useStyles();
    return (
        <div>
            <Button variant='contained' color='primary' size='small' className={classes.button}><EditIcon className={clsx(classes.leftIcon, classes.iconSmall)} />Edit
            </Button>
        </div>
    )
}
