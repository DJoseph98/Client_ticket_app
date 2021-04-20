import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import DashboardPage from '../component/DashboardPage';
import AddTicketPage from '../component/AddTicketPage';
import EditTicketPage from '../component/EditTicketPage';
import NotFoundPage from '../component/NotFoundPage';

const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/create" component={AddTicketPage} />
                <Route path="/edit/:id" component={EditTicketPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
    );
};

export default AppRouter;