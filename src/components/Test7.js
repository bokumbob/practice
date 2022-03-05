import React, { useEffect, useState } from 'react';

const Test7 = () => {
    const [text, setText] = useState(1)
    const [count, setCount] = useState(1)
    const changeInput = (e) => {
        const {value} = e.target
        setText(Number(value))
    }

    useEffect(()=>{
        console.log('유즈이펙트')
        const timer = setInterval(()=>{
            setCount(preVnt => preVnt+text)
        },1000)

        return() => {
            console.log('클린업')
            clearInterval(timer)
        }
        // 걍 리턴(함수) 하면 바로 적용되고 끝남 그래서 플러스 안됨
        // 위 함수의 경우 text의 값이 변경될 때마다 이전 셋카운트 함수 지우고 새 셋카운트함수를 실행하는 형식임
        // 맨처음 유즈이펙트 후에는 클린업-유즈이펙트 순임
        // 맨처음 말곤 클린업이 먼저 실행됨
    },[text])

    return (
        <div>
            숫자간격 : <input type="text" valur={text} onChange={changeInput} />
            <h2>입력한 값만큼 1초마다 증가 : {count}</h2>
        </div>
    );
};

export default Test7;