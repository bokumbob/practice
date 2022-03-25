import React, { useEffect, useState } from 'react';
import withLoading from './withLoading';

const Hoc = () => {
    return (
    <button>Button</button> 
    );
};

export default withLoading(Hoc);