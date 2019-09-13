import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import { datePickerDefaultProps } from '../../../node_modules/@material-ui/pickers/constants/prop-types';



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
export default function EditButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button variant='contained' color='primary' size='small' className={classes.button} onClick={props.onClick}><EditIcon className={clsx(classes.leftIcon, classes.iconSmall)} />Edit
            </Button>
        </div>
    )
}
