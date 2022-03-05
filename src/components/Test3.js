import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test3 = () => {
    const [cnt, setCnt] = useState(1)
    const ref1 = useRef(null)
    const ref2 = useRef()
    const onColor = () => {
        setCnt(cnt => cnt+1)
        setCnt(count => count + 1)
        ref1.current.style.backgroundColor = 'pink'
        ref1.current.style.padding = '20px'
        ref2.current.style.backgroundColor = 'skyblue'
        ref1.current.style.padding = '20px'
    }

    // 화면에 그려진 후
    useEffect(()=>{
        ref1.current.style.backgroundColor = 'tomato'
        ref1.current.style.padding = '40px'
    })
    
    // 화면에 그려지기 전
    // useEffect의 오류가 발생할 때 쓰는 것
    useLayoutEffect(() => {
        ref2.current.style.backgroundColor = 'yellow'
        ref2.current.style.padding = '40px'
    })

    return (
        <div>
            <h2>
                {cnt}
            </h2>
            <h2 ref = {ref1}>useEffect</h2>
            <h2 ref={ref2}>useLayoutEffect</h2>
            <button onClick={onColor}>컬러+숫자</button>
        </div>
    );
};

export default Test3;

// Effect Hook 을 사용하면 함수 컴포넌트에서 사이드 이펙트를 수행
// 함수형 컴포에서 부수효과
/* 
부수효과 : 함수가 결과값을 반환하는 것 외에 다른 일을 할 때 그 함수는 부수효과를 가진다

사이드 이펙트 : 비동기 통신 요청/응답 - ajax, DOM조작, 구독/취소 등

마운트 : 컴포넌트를 특정위치에 끼워넣는 행위

useEffect : 렌더링 한 후 (화면에 그리고 난 후 실행)
useLayoutEffect : 렌더링 전에 (화면에 그리기 전에 실행) - useEffect의 문제가 발생했을 때

클래스 - 라이프사이클
componentDidMount 처음 한 번만
componentDidUpdate 갱신
componentWillUnmount 종료시, 로딩이 끝나고 등등
위 셋을 합친 게 useEffect

형식)
useEffect(콜백함수, [의존성])

형식1) Mount / Update - 많이 사용하지 않음
useEffect(
    ()=>{
        실행문
    })

형식2) Mount - 처음 딱 한 번만
useEffect(
    ()=>{
        실행문
    }, [])


형식3) Mount / Update - 의존성 값이 변화할 때만
useEffect(
    ()=>{
        실행문
    }, [의존성 state,props...])

    메모리 누수가 발생하지 않도록 정리(clearn-up)하는 것은 매우 중요

    사용범위
    props로 받은 값 처리할 때(업데이트할때)
    외부 api (비동기처리 - fetch, axios)
    setTimeOut, setInterval
    외부 라이브러리
*/