const filterReducerDefaultState = {
    order:"ASC",
    sortBy: 'date'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY_STATUS':
            return {
                ...state,
                order: action.order,
                sortBy: 'status'
            }
        case 'SORT_BY_PRIORITY':
            return {
                ...state,
                order: action.order,
                sortBy: 'priority'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                order: action.order,
                sortBy: 'date'
            }
        default:
            return state;
    }
}