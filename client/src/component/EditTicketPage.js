import React from 'react';
import TicketForm from './TicketForm';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTicket } from '../actions/ticketAction';
import { useHistory } from "react-router-dom";
import LoadingPage from './LoadingPage';
import Header from './HeaderPage';

const EditTicketPage = () => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const ticket = useSelector((state) => {
        return state.tickets.find((ticket) => ticket.ticketNumber === id);
    });
    const onSubmit = (newTicketData) => {
        dispatch(updateTicket(id, newTicketData));
        history.push('/');
    }
    return (
        <div>
        <Header />
            Edit Page
            {ticket
                ? <TicketForm ticket={ticket} onSubmit={onSubmit} isNew={0} />
                : <LoadingPage />
            }
        </div>
    );
};

export default EditTicketPage;