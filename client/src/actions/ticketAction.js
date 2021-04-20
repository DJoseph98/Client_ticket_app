import { getTicketListAPI, createTickeAPI, updateTicketAPI } from '../api/tickets';

export const fetchTickets = async (dispatch, getState) => {
    const { response, error } = await getTicketListAPI();
    dispatch({ type: 'SET_TICKETS', tickets: response });
}

export const addTicket = (ticket) => {
    return async (dispatch, getState) => {
        const { newTicket, error } = await createTickeAPI(ticket);
        dispatch({ type: 'ADD_TICKET', ticket: newTicket });
    }
}

export const updateTicket = (id, updates) => {
    return async (dispatch, getState) => {
        const { updatedTicket, error } = await updateTicketAPI(id, updates);
        console.log(updatedTicket)
        dispatch({ type: 'EDIT_TICKET', ticket: {updatedTicket:updatedTicket, id:id} });
    }
}

