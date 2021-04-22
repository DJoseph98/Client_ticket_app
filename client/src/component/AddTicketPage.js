import React from 'react';
import TicketForm from './TicketForm';
import { useDispatch } from 'react-redux';
import { addTicket } from '../actions/ticketAction';
import { useHistory } from "react-router-dom";
import Header from './HeaderPage';

const AddTicketPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = (newTicketData) => {      
        dispatch(addTicket(newTicketData));
        history.push('/');
    }
    return (
        <div>
        <Header />
            Add Ticket Page
            <TicketForm isNew={1} onSubmit={onSubmit} />
        </div>
    );
};

export default AddTicketPage;