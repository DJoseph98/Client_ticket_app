import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const HeaderPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" component={Paper}>
                <Toolbar>
                    <Button component={NavLink} to="/" color="inherit">Dashboard</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default HeaderPage;

//<NavLink to="/">Dashboard</NavLink>