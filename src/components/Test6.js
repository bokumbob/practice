import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [count, setCount] = useState(1)

    useEffect(()=>{
        console.log('useEffect')

        const timer = setInterval(()=>{
            setCount(count => count+1)
            // 이전값 받아와서 계속 더해줘야됨
            // 그냥 카운트 쓰면 계속 1로 초기화해서 더하고 초기화더하고 반복
        },1000)
        return() => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h1>카운트 : {count} </h1>
        </div>
    );
};

export default Test6;