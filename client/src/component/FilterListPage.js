import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByDate, sortByStatus, sortByPriority } from '../actions/filterAction';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/* Filter component to sort tickets by user choice and dispatch the filter to redux state */
const FilterListPage = () => {
    const [sortDate, useSortDate] = useState(0);
    const [sortStatus, useSortStatus] = useState(0);
    const [sortPriority, useSortPriority] = useState(0);
    const dispatch = useDispatch();
    const OnChangeSortDate = () => {
        let isSorted = 0;
        if (sortDate === 0) {
            isSorted = 1;
            dispatch(sortByDate('DESC'));
        } else if (sortDate === 1) {
            isSorted = 0;
            dispatch(sortByDate('ASC'));
        }
        useSortDate(isSorted);
    }
    const OnChangeSortStatus = () => {
        let isSorted = 0;
        if (sortStatus === 0) {
            isSorted = 1;
            dispatch(sortByStatus('DESC'));
        } else if (sortStatus === 1) {
            isSorted = 0;
            dispatch(sortByStatus('ASC'));
        }
        useSortStatus(isSorted);
    }
    const OnChangeSortPriority = () => {
        let isSorted = 0;
        if (sortPriority === 0) {
            isSorted = 1;
            dispatch(sortByPriority('DESC'));
        } else if (sortPriority === 1) {
            isSorted = 0;
            dispatch(sortByPriority('ASC'));
        }
        useSortPriority(isSorted);
    }

    return (
        <div>
        <Box display="flex" justifyContent="flex-end" flexDirection="row">
                <Typography style={{ marginRight: 8 }}>Sorted by :</Typography>
                <Button style={{ marginRight: 5 }} variant="contained" size="small" color="primary" onClick={OnChangeSortDate}>Date</Button>
                <Button style={{ marginRight: 5 }} variant="contained" size="small" color="primary" onClick={OnChangeSortStatus}>Status</Button>
                <Button variant="contained" size="small" color="primary" onClick={OnChangeSortPriority}>Priority</Button>
           </Box>
        </div>
    );
};

export default FilterListPage;