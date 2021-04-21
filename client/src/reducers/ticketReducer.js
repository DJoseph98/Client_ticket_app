const ticketReducerDefaultState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = ticketReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TICKET_SUCCESS':
            return [
                ...state,
                action.ticket
            ];
        case 'EDIT_TICKET_SUCCESS':
            return state.map((ticket) => {
                    if (ticket.ticketNumber === action.id) {
                        return {
                            ...state,
                            ...action.updatedTicket
                        }
                    } else {
                        return state;
                    }
                })
        case 'SET_TICKETS_SUCCESS':
            return action.tickets;
        default:
            return state;
    }
}