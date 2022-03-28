import React, { Component, useContext } from 'react';
import { TContext } from './TContext';

// class ThemeBtn extends Component {
//     render (){
//         let props = this.props;
//         let theme = this.context;
//         return (
//             <button {...props} onClick={props.changeTheme} style={{backgroundColor: theme.background, color: theme.foreground}}>button</button>
//         )
//     }
// };

// ThemeBtn.contextType = TContext;

// export default ThemeBtn;

const ThemeBtn = (props) => {
    const theme = useContext(TContext)
    return (
        <button onClick={props.changeTheme} style={{backgroundColor: theme.background, color: theme.foreground}}>button</button>
    );
};

export default ThemeBtn;