import { ThemeContext } from '@emotion/react';
import React, { Component } from 'react';
import { TContext, Theme } from './TContext';
import ThemeBtn from './ThemeBtn';

class Ex extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: Theme.light,
        }
        this.toggleTheme = () => {
            this.setState((prev) => {return {
                theme: prev.theme === Theme.dark ? Theme.light : Theme.dark
            }})
        }
    }
    render() {
        return (
            <div>
                <TContext.Provider value={this.state.theme}>
                    <ThemeBtn changeTheme={this.toggleTheme} />
                    <TContext.Consumer>
                        {(theme) => {return <div style={{height:300, width:300, backgroundColor: theme.background}}></div>}}
                    </TContext.Consumer>
                </TContext.Provider>
                    <ThemeBtn />
                    {/* 프로바이더 밖에 있으면 디폴트값을, 안에 있다면 밸류에 넣어준 값을 받는다 */}
            </div>
        );
    }
}

export default Ex;