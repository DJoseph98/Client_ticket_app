import React from 'react';
import TicketForm from './TicketForm';
import { useDispatch } from 'react-redux';
import { addTicket } from '../actions/ticketAction';
import { useHistory } from "react-router-dom";
import Header from './HeaderPage';
import Typography from '@material-ui/core/Typography';

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
            <Typography style={{ margin: 8 }} variant='h4'>Add Ticket Page</Typography>
            <TicketForm onSubmit={onSubmit} />
        </div>
    );
};

export default AddTicketPage;