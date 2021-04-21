import { React } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

const DashboardPage = () => {
    const tickets = useSelector(state => state.tickets);
    return (
        <div>
            <ErrorPage />
            {tickets.length > 0 
                ? tickets.map((ticket, key) => <p key={key}><NavLink to={`/edit/${ticket.ticketNumber}`}>{ticket.title}</NavLink></p>)
                : <LoadingPage />
            }
            <p>
                <NavLink to="/create">Create Ticket</NavLink>
            </p>
        </div>
    );
};

export default DashboardPage;