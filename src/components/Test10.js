import React, { useState } from 'react';
import Test10Sub from './Test10Sub';

const Test10 = () => {
    const [msg, setMsg] = useState('')
    const [isShow, setIsShow] = useState(false)
    const onMsg1 = () => {
        const result = window.confirm('전부 삭제하시겠습니까?')
        if(result){
            // 이러면 컨펌 예/아니오 버튼을 누르면 각각 트루 펄스 리턴해주는 듯 그거로 판단
            setMsg('예 전부 삭제해주세요')
            setIsShow(true)
        } else {
            return 
        }
    }
    const onMsg2 = () => {
        const result = window.confirm('전부 복구하시겠습니까?')
        if(result){
            setMsg('예 전부 복구해주세요')
            setIsShow(true)
        } else {
            return 
        }
    }
    return (
        <div>
            <p>
                <button onClick={onMsg1}>메세지1</button>
                <button onClick={onMsg2}>메세지2</button>
            </p>
            {/* <Test10Sub msg={msg}  /> */}
            { isShow && <Test10Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />}
        </div>
    );
};

export default Test10;