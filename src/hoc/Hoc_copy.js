import React from 'react';
import withLoading from './withLoading';
const Hoc_copy = () => {
    return (
        <input defaultValue="input" />
    );
};

export default withLoading(Hoc_copy);