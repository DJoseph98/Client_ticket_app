import { React } from 'react';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import { NavLink } from 'react-router-dom';
import OpenListTicketPage from './OpenListTicketPage';
import ToConfirmListTicketPage from './ToConfirmListTicketPage';
import FilterListPage from './FilterListPage';

const DashboardPage = () => {
    return (
        <div>
            <p>
                <NavLink to="/create">Create Ticket</NavLink>
            </p>
            <ErrorPage />
            <OpenListTicketPage />
            <FilterListPage />
            <ToConfirmListTicketPage />
        </div>
    );
};

export default DashboardPage;