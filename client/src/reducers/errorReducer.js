const ticketReducerDefaultState = '';

/* Error reducer to set Error to redux state store from API call */

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = ticketReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return action.error;
        default:
            return state;
    }
}