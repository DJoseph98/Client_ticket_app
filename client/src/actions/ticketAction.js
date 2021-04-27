import { getTicketListAPI, createTickeAPI, updateTicketAPI } from '../api/tickets';

export const fetchTickets = async (dispatch, getState) => {
    const { response, error } = await getTicketListAPI();
    if(error) {
        dispatch({ type: 'SET_ERROR', error });
    }else{
        dispatch({ type: 'SET_TICKETS', tickets: response });
    }       
}

export const addTicket = (ticket) => {
    return async (dispatch, getState) => {
        const { newTicket, error } = await createTickeAPI(ticket);
        if(error) {
            dispatch({ type: 'SET_ERROR', error });
        }else{
            dispatch({ type: 'ADD_TICKET', ticket: newTicket });
        }   
        
    }
}

export const updateTicket = (id, updates) => {
    return async (dispatch, getState) => {
        const { updatedTicket, error } = await updateTicketAPI(id, updates);
        if(error){
            dispatch({ type: 'SET_ERROR', error });
        }else{
            dispatch({ type: 'EDIT_TICKET', ticket: { id, updatedTicket } });
        }
    }
}

