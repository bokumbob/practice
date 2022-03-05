import React, { useEffect } from 'react';

const Test10Sub = ({msg, isShow, setIsShow}) => {
    useEffect(()=>{
        const setTime = setTimeout(()=>{
            setIsShow(false)
        },3000)
        return () => {clearTimeout(setTime)}
    },[isShow])
    return (
        <>
        {/* <div style={{background:'pink', padding:'15px 30px', margin:20, fontSize:20}}>
            메세지 : {msg}
        </div> */}
        {
            isShow && <div style={{background:'pink', padding:'15px 30px', margin:20, fontSize:20}}>
            메세지 : {msg}
        </div>
        }
        </>
    );
};

export default Test10Sub;