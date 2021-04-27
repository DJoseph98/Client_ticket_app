import { React } from 'react';
import { useSelector } from 'react-redux';
import ticketSort from '../selectors/ticketSort';
import ListTicketTablePage from './ListTicketTablePage';
import LoadingPage from './LoadingPage';
import FilterListPage from './FilterListPage';
import Typography from '@material-ui/core/Typography';

/* Component to render Active ticket list
    fetch tickets with confirmed activity and !== from CLOSED status
    Pass tickets to ListTicketTablePage component
*/
const OpenListTicketPage = () => {
    const tickets = useSelector((state) => {
        return ticketSort(
            state.tickets.filter((ticket) => ticket.Ticket_Activity.activity === 'confirmed' && ticket.Ticket_Status.status !== 'CLOSED'),
            state.filters);
    });

    return (
        <div>
            <Typography variant='h5'>Active tickets</Typography>
            <FilterListPage />
            {tickets
                ? <div>
                    {tickets.length > 0
                        ? <ListTicketTablePage tickets={tickets} />
                        : <p>No open tickets</p>}
                </div>
                : <LoadingPage />
            }
        </div>

    );
};

export default OpenListTicketPage;