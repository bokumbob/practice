import React, {useState} from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    return (
        <div>
            <Test1Sub type="email" id="aaaa" lable="이메일" placeholder="xxxx@naver.com" handleChange={handleChange} />
            <hr />
            {
                text.trim().length > 0 ? (<output>입력값은 [{text}]입니다</output>) : (<output>입력 대기중 입니다.</output>)
                // trim 앞 공백 삭제
            }
        </div>
    );
};

export default Test1;