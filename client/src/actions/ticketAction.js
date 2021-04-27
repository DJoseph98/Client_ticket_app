import { getTicketListAPI, createTickeAPI, updateTicketAPI } from '../api/tickets';

/* dispatch ticket list to redux store with redux thunk from API result
    if fail dispatch error to redux state error
    */
export const fetchTickets = async (dispatch, getState) => {
    const { response, error } = await getTicketListAPI();
    if(error) {
        dispatch({ type: 'SET_ERROR', error });
    }else{
        dispatch({ type: 'SET_TICKETS', tickets: response });
    }       
}
/* dispatch create ticket to redux store with redux thunk from API result
    if fail dispatch error to redux state error
    */
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
/* dispatch ticket updates to redux store with redux thunk from API result
    if fail dispatch error to redux state error
    */
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

