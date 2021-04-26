import { React } from 'react';
import ErrorPage from './ErrorPage';
import { NavLink } from 'react-router-dom';
import OpenListTicketPage from './OpenListTicketPage';
import ToConfirmListTicketPage from './ToConfirmListTicketPage';
import HeaderPage from './HeaderPage';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const DashboardPage = () => {
    return (
        <div>
            <HeaderPage />
            <p>
                <Button variant="contained" color="primary" size="large" component={NavLink} to="/create">Create Ticket</Button>
            </p>
            <ErrorPage />
            <ToConfirmListTicketPage />
            <OpenListTicketPage />
        </div>
    );
};

export default DashboardPage;