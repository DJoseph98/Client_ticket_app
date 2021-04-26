import { React } from 'react';
import { useSelector } from 'react-redux';
import ticketSort from '../selectors/ticketSort';
import ListTicketTablePage from './ListTicketTablePage';
import LoadingPage from './LoadingPage';
import FilterListPage from './FilterListPage';
import Typography from '@material-ui/core/Typography';

const OpenListTicketPage = () => {
    const tickets = useSelector((state) => {
        return ticketSort(
            state.tickets.filter((ticket) => ticket.Ticket_Activity.activity === 'confirmed' && ticket.Ticket_Status.status !== 'CLOSED'),
            state.filters);
    });

    return (
        <div>
            <Typography variant='h5'>Open tickets</Typography>
            <FilterListPage />
            {tickets
                ? <div>
                    {tickets.length > 0
                        ? <ListTicketTablePage tickets={tickets} />
                        : <p>No opened tickets</p>}
                </div>
                : <LoadingPage />
            }
        </div>

    );
};

export default OpenListTicketPage;