import React from 'react';
import TicketListElements from './TicketListElements';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NotFoundPage from './NotFoundPage';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    thead: {
        fontWeight: "bold",
    },
    ticketNumber: {
        width: "25%"
    },
    title: {
        width: "15%"
    },
    email: {
        width: "20%"
    },
    date: {
        width: "15%"
    },
    priority: {
        width: "5%"
    },
    status: {
        width: "10%"
    },
    activity: {
        width: "20%"
    },
});

/* Component to render table with MaterialUI */
const ListTicketTablePage = (props) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={clsx(classes.thead, classes.ticketNumber)}>Ticket Number</TableCell>
                        <TableCell align="center" className={clsx(classes.thead, classes.title)}>Title</TableCell>
                        <TableCell align="center" className={clsx(classes.thead, classes.email)}>Email</TableCell>
                        <TableCell align="center" className={clsx(classes.thead, classes.date)}>Date</TableCell>
                        <TableCell align="center" className={clsx(classes.thead, classes.priority)}>Priority</TableCell>
                        <TableCell align="center" className={clsx(classes.thead, classes.status)}>Status</TableCell>
                        <TableCell align="center" className={clsx(classes.thead, classes.activity)}>Activity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tickets.length > 0
                        ? props.tickets.map((ticket) =>
                            <TicketListElements key={ticket.ticketNumber} ticket={ticket} />
                        )
                        : "No Tickets"
                    }
                    {!props.tickets && <NotFoundPage />}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListTicketTablePage;