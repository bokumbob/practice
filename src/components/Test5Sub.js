import React, { useEffect, useState } from 'react';

const Test5Sub = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const onMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('mousemove',onMove)
        // 위 이벤트는 시작 이후로 계속 살아있으므로 클린업 해야함
        return() => {
            window.removeEventListener('mousemove', onMove)
        }
    },[])
    return (
        <div>
            <h2>마우스의 좌표</h2>
            <div style={{ border: '1px solid #000', width: 400, padding: 30, margin: 15 }}>
                <h1>X축 : {x} , Y축 : {y}</h1>
                </div>
        </div>
    );
};

export default Test5Sub;