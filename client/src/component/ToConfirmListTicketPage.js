import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTicket } from '../actions/ticketAction';

const ToConfirmListTicketPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector((state) => {
        return state.tickets.filter((ticket) => ticket.Ticket_Activity.activity === 'pending');
    });
    return (
        <div>
            Ticket to confirm
            {tickets.length > 0 &&
                tickets.map((ticket, key) => <p key={key}>
                    {ticket.title}
                    <button onClick={() => {
                        dispatch(updateTicket(ticket.ticketNumber, { ticketActivitesId: 2 }));
                    }}>Confirm</button>
                    <button>Reject</button>
                </p>)
            }
        </div>
    );
};

export default ToConfirmListTicketPage;