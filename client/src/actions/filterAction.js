/* ACtion to set filter choise to redux filter state */
export const sortByDate = (order) => (
    {
        type: 'SORT_BY_DATE',
        order
    }
);

export const sortByStatus = (order) => (
    {
        type: 'SORT_BY_STATUS',
        order
    }
);

export const sortByPriority = (order) => (
    {

        type: 'SORT_BY_PRIORITY',
        order
    }
);