import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default (tickets, { sortBy, order }) => {
    // eslint-disable-next-line array-callback-return
    return tickets.sort((a, b) => {
        if (sortBy === 'date') {
            if (order === 'ASC') {
                return moment(a.createdAt) - moment(b.createdAt);
            } else if (order === 'DESC') {
                return moment(b.createdAt) - moment(a.createdAt);
            }
        } else if (sortBy === 'status') {
            if (order === 'ASC') {
                return a.Ticket_Status.id - b.Ticket_Status.id;
            } else if (order === 'DESC') {
                return b.Ticket_Status.id - a.Ticket_Status.id;
            }
        } else if (sortBy === 'priority') {
            if (order === 'ASC') {
                return a.Ticket_Level_Priority.id - b.Ticket_Level_Priority.id;
            } else if (order === 'DESC') {
                return b.Ticket_Level_Priority.id - a.Ticket_Level_Priority.id;
            }
        }
    });
};