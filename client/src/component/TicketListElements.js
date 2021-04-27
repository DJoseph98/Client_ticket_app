import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { updateTicket } from '../actions/ticketAction';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    row: {
        cursor: "pointer"
    },
    cell: {
        wordBreak: 'break-word',
    }
}));

const TicketListElements = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const toTicket = (ticketNumber) => {
        history.push(`/edit/${ticketNumber}`);
    }
    const handleTicketConfirm = (e) => {
        e.stopPropagation();
        dispatch(updateTicket(props.ticket.ticketNumber, { ticketActivitesId: 2 }));
    }
    const handleTicketReject = (e) => {
        e.stopPropagation();
        dispatch(updateTicket(props.ticket.ticketNumber, { ticketActivitesId: 3 }));
    }
    return (
        <TableRow component="tr" className={classes.row} onClick={(e) => { e.preventDefault(); toTicket(props.ticket.ticketNumber) }} key={props.ticket.title}>
            <TableCell align="center" className={classes.cell}>{props.ticket.ticketNumber}</TableCell>
            <TableCell align="center" className={classes.cell}>{props.ticket.title}</TableCell>
            <TableCell align="center" className={classes.cell}>{props.ticket.email}</TableCell>
            <TableCell align="center" className={classes.cell}>{moment(props.ticket.createdAt).format('LLL')}</TableCell>
            <TableCell align="center"> {props.ticket.Ticket_Level_Priority.levelPriority}</TableCell>
            <TableCell align="center">{props.ticket.Ticket_Status.status}</TableCell>
            {props.ticket.Ticket_Activity.activity === "pending" ?
                <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                        <Button onClick={handleTicketConfirm} style={{ marginRight: 5 }} variant="contained" size="small" color="primary">Confirm</Button>
                        <Button onClick={handleTicketReject} variant="contained" size="small" color="primary">Reject</Button>
                    </Box>
                </TableCell>
                : <TableCell align="center">{props.ticket.Ticket_Activity.activity}</TableCell>
            }
        </TableRow>
    );
};

export default TicketListElements;

