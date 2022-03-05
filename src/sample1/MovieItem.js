import React from 'react';
import Numeral from "numeral";
import { BiCaretUp, BiCaretDown, BiDotsHorizontal } from "react-icons/bi";

const MovieItem = ({ item, overMovie }) => {
    const { rank, movieNm, salesAmt, audiCnt, rankInten } = item

    return (
        <tr onMouseOver={()=>overMovie(rank)}>
            <td>{rank}</td>
            <td>{movieNm}</td>
            <td>{Numeral(salesAmt).format(0, 0)}원</td>
            <td>{Numeral(audiCnt).format(0, 0)}명</td>
            <td>
                <i style={{ fontSize: 20, color: 'red' }}>
                    {
                        rankInten > 0 && <BiCaretUp />
                    }
                </i>
                <i style={{ fontSize: 20, color: 'blue' }}>
                    {
                        rankInten < 0 && <BiCaretDown />
                    }
                </i>
                <i style={{ fontSize: 20, color: 'grey' }}>
                    {
                        rankInten === 0 && <BiDotsHorizontal />
                    }
                </i>
                <span style={{ marginLeft: 10 }}>{rankInten}</span>
                </td>
        </tr>
    );
};

export default MovieItem;