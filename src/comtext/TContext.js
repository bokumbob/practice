import React, { createContext } from 'react';

export const Theme = {
    light:{
        foreground: '#000',
        background: '#eee'
    },
    dark: {
        foreground: '#fff',
        background: '#222'
    }
};

export const TContext = createContext(Theme.dark) ;