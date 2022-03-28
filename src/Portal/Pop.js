import { width } from '@mui/system';
import React from 'react';

const Pop = () => {
    return (
        <div style={{background: '#ddd', width:'100%', height:'100%', position:'fixed', top:0}}>
            <div style={{background:'#fff', width:600, height:600}}></div>
        </div>
    );
};

export default Pop;