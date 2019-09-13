import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SimpleCard from '../card-table/CardTable';
import PermIdentity from '@material-ui/icons/PermIdentity';
import CalendarToday from '@material-ui/icons/CalendarToday';
import FingerPrint from '@material-ui/icons/Fingerprint';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import ListItemText from '@material-ui/core/ListItemText';
import { employee } from '../../dummy-data-object/dummy-data-object';

class ViewApplication extends React.Component {

    render() {

        return (
            <Card className='flex-card-view-application'>
                <CardContent className='flex-card-content-view-application'>
                    <List>
                        <ListItem>
                            <ListItemIcon><PermIdentity /></ListItemIcon>
                            <ListItemText>Name:{employee.name}</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><FingerPrint /></ListItemIcon>
                            <ListItemText>Employee ID:{employee.employeeCode}</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
                            <ListItemText>Voucher No.:{""}</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CalendarToday /></ListItemIcon>
                            <ListItemText>Date:{""}</ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        );
    }
}
export default ViewApplication;