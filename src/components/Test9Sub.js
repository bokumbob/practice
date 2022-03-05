import React, { useEffect, useState } from 'react';

const Test9Sub = () => {
    const [now, setNow] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(() => {
            setNow(new Date())
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <h2>날짜 : {now.toLocaleDateString()}</h2>
            <h2>시간 : {now.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Test9Sub;