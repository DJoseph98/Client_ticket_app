import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortByDate, sortByStatus, sortByPriority } from '../actions/filterAction';

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
            <button onClick={OnChangeSortDate}>Date</button>
            <button onClick={OnChangeSortStatus}>Status</button>
            <button onClick={OnChangeSortPriority}>Priority</button>
        </div>
    );
};

export default FilterListPage;