import { React } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import ticketSort from '../selectors/ticketSort';
import FilterListPage from './FilterListPage';

const OpenListTicketPage = () => {
    const tickets = useSelector((state) => {
        return ticketSort(
            state.tickets.filter((ticket) => ticket.Ticket_Activity.activity === 'confirmed' && ticket.Ticket_Status.status !== 'CLOSED'),
            state.filters);
    });

    return (
        <div>
            Active ticket List
            {tickets.length > 0
                ? tickets.map((ticket, key) => <p key={key}><NavLink to={`/edit/${ticket.ticketNumber}`}>{ticket.title} - {ticket.email} - {ticket.createdAt} - {ticket.Ticket_Status.status} - {ticket.Ticket_Level_Priority.levelPriority} </NavLink></p>)
                : <span>No Open Tickets</span>
            }
        </div>
    );
};

export default OpenListTicketPage;