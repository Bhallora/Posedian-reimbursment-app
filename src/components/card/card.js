import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { flexbox } from '@material-ui/system';
import TextBox from '../text-box/text-box';
import './card.scss';
import { bgcolor } from '../../../node_modules/@material-ui/system';


const useStyles = makeStyles({
    card: {
        width: 700,
        maxWidth: 1000,
        minWidth: 475,


        marginLeft: 550,
        marginTop: 150

    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        marginLeft: 500,
        marginBottom: 30,
        background: '#1a293e',
        color: 'white'


    },
    content: {
        marginLeft: 115,
        marginTop: 30

    }


})

export default function SimpleCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography className={classes.CardTitle} color="textSecondary" gutterBottom>
                    <h1> {props.name} </h1>
                </Typography>
                <ul type='none'>
                    <li>   <TextBox name='Name' /></li>
                    <li> <TextBox name="Employee Code" /></li>
                </ul>

            </CardContent>

            <CardActions>
                <Button className={classes.button} size="small">Next</Button>
            </CardActions>

        </Card>
    );
}