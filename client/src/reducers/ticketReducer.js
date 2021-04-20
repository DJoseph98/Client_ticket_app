const ticketReducerDefaultState = [];

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
                if (ticket.ticketNumber === action.ticket.id) {
                    return {
                        ...state,
                        ...action.ticket.updatedTicket
                    }
                } else {
                    return ticket;
                }
            });
        case 'SET_TICKETS':
            return action.tickets;
        default:
            return state;
    }
}