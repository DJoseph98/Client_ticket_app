import { React, useEffect, useState } from 'react';
import { addTicket, updateTicket } from '../actions/ticketAction';
import { useDispatch, useSelector } from 'react-redux';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.data);
    const error = useSelector(state => state.error);
    return (
        <div>
            {error && <span>{error}</span>}
            {tickets && tickets.map(ticket => <p>{ticket.title}</p>)}
            <button onClick={() => dispatch(addTicket({
                "title": "test",
                "email": "dyddzader",
                "problemDescription": "dyddzader",
                "ticketLvlPriorId": 1
            }))}>Create</button>
            <button onClick={() => dispatch(updateTicket('07941848-48ca-40e0-9aa4-8b12be30106d',{
                "title": "d",
                "email": "dyddzader",
                "problemDescription": "dyddzader",
                "ticketLvlPriorId": 1
            }))}>Create</button>
        </div>
    );
};

export default DashboardPage;