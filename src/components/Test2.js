import React from 'react';
import { BiAngry, BiBadge } from "react-icons/bi";
import Numeral from "numeral";
import moment from 'moment'

const Test2 = () => {
    return (
        <div>
            <p style={{fontSize:50, color:'tomato'}}>
                {/* <BiAngry /> */}
                <BiBadge />
            </p>
            <p style={{fontSize:80, color:'hotpink'}}>
                <BiAngry />
                {/* <BiBadge /> */}
            </p>
            <h2>
                {Numeral(5555136).format(0,0)}
            </h2>
            <h2>{moment('20220305').format('YYYY.MM.DD')}</h2>
        </div>
    );
};

export default Test2;