import React from 'react';
import { useSelector } from 'react-redux';

const ErrorPage = () => {
    const error = useSelector(state => state.error);
    return (
        <div>
            <span>{error}</span>
        </div>
    );
};

export default ErrorPage;