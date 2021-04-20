const ticketReducerDefaultState = {
    data: null,
    error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = ticketReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TICKET_SUCCESS':
            return {
                data: [
                    ...state.data,
                    action.ticket
                ],
                error: null
            };
        case 'ADD_TICKET_FAILED':
            return {
                error: action.error
            };
        case 'EDIT_TICKET_SUCCESS':
            return {
                data: state.data.map((ticket) => {
                    if (ticket.ticketNumber === action.ticket.id) {
                        return {
                            ...state.data,
                            ...action.ticket.updatedTicket
                        }
                    } else {
                        return ticket;
                    }
                }),
                error: null
            }
        case 'EDIT_TICKET_FAILED':
            return {
                error: action.error
            };
        case 'SET_TICKETS_SUCCESS':
            return {
                data: action.tickets,
                error: null
            };
        case 'SET_TICKETS_FAILED':
            return {
                error: action.error
            };
        default:
            return state;
    }
}