import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { flexbox } from '@material-ui/system';
import TextBox from '../text-box/TextBox';
import './card.scss';
import { bgcolor } from '@material-ui/system';
import { NavLink, HashRouter } from 'react-router-dom';



export default function KxCard(props) {
    // const classes = useStyles();


    return (<div className='flex-container'>
        <Card className='card'>
            <CardContent className='content'> <h1>
                <Typography className='CardTitle' color="textSecondary" gutterBottom>
                    {props.name}
                </Typography></h1>
                {props.children}

            </CardContent>
            <CardActions>

            </CardActions>

        </Card>
    </div>
    );
}