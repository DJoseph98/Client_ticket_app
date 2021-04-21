import React from 'react';
import TicketForm from './TicketForm';
import { useDispatch } from 'react-redux';
import { addTicket } from '../actions/ticketAction';
import { useHistory } from "react-router-dom";

const AddTicketPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = (newTicketData) => {      
        dispatch(addTicket(newTicketData));
        history.push('/');
    }
    return (
        <div>
            Add Ticket Page
            <TicketForm isNew={1} onSubmit={onSubmit} />
        </div>
    );
};

export default AddTicketPage;