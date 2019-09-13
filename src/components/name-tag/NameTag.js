import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './name-tag.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 6),
        backgroundColor: '#1a293e',
        color: 'white',

        borderRadius: 0,


    },
    content: {


        fontFamily: 'Gayathri',


    },
}));

export default function NameTag(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography className={classes.content}>
                <h4> {props.name}</h4>
            </Typography>
        </Paper>


    )
}