import React, { useEffect, useRef, useState } from 'react';

const Test8 = () => {
    const [count, setCount] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const onToggle = () => {
        setIsActive(!isActive)
    }
    const onReset = () => {
        setCount(0)
        setIsActive(false)
    }

    // useEffect
    useEffect(() => {
        // let timer = null 해주고 이프문으로 트루펄스 구별해서 새 함수 할당해주는 것도 있음 수업에선 글케 함
        // 트루땐 셋인터벌 펄스땐 클리어
        const timer = 
            setInterval(()=>{
                setCount(prev => prev+1)
            },1000)
        if (!isActive) {
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer)
        }
    }, [isActive])

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <button onClick={onToggle}>{isActive ? '중지' : '시작'}</button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test8;