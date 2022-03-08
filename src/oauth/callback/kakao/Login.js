import { KAKAO_AUTH_URL } from "./kakaologin/Kakao";
import React from 'react';

const Login = () => {
    return (
        <div>
            <a href={KAKAO_AUTH_URL}>카카오로그인</a>
            <span>로그인해복;</span>
        </div>
    );
};

export default Login;