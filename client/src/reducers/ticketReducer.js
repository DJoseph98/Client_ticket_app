const ticketReducerDefaultState = [];

/* ticket reducer to set add/update/fecth to redux store */

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = ticketReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TICKET':
            return [
                ...state,
                action.ticket
            ];
        case 'EDIT_TICKET':
            return state.map((ticket) => {
                    if (ticket.ticketNumber === action.ticket.id)
                        return {
                            ...ticket,
                            ...action.ticket.updatedTicket
                        }
                    else {
                        return ticket;
                    }
                });
        case 'SET_TICKETS':
            return action.tickets;
        default:
            return state;
    }
}