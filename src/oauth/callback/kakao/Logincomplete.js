import React, { useEffect } from 'react';
import { user } from './user';

const Logincomplete = (props) => {
let a = new URL(window.location.href).searchParams.get('code');

useEffect(async()=>{
    await a
})
    return (
        <div onClick={()=>user(1)}>
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
            로그인 완료
        </div>
    );
};

export default Logincomplete;