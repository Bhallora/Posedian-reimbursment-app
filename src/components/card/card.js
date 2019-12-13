import React, { Component } from 'react';
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
//import { NavLink, HashRouter } from 'C:/Users/pallab/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
import PreviousButton from '../prev-button/PreviousButton';



class KxCard extends Component {




    // handleDecrement = () => {
    //   this.setState({ count: this.state.count - 1 })
    // }



    render() {
        return (<div className='flex-container'>
            <Card className='card'>
                <CardContent className='content'> <h1>
                    <Typography className='CardTitle' color="textSecondary" gutterBottom>
                        {this.props.name}
                    </Typography></h1>
                    {this.props.children}

                </CardContent>
                <CardActions>
                </CardActions>

            </Card>
        </div>
        );
    }
}
export default KxCard;