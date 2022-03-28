import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Pop from './Pop';

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"))
}
// 인덱스에 디브아이디 포탈을 추가하고 그 포탈 안에다가 자식 태그를 그리겠다
// 그래서 얘가 root 밑에 형제로 존재해서 더 위에 뜨게 됨

const Dialog = () => {

    const [a, setA] = useState(false)
    const onClick2 = () => {
        setA(true)
    }

    return (
        <>
            <div onClick={() => console.log('div')}>
                {/* 위는 루트고 */}
                <Portal>
                    {
                        a && <Pop />
                    }
                </Portal>
                {/* 위는 포탈의 영역인데 */}
                <button>하하하</button>
            </div>
            {/* 하하하를 누르든 Pop의 요소를 누르든 온클릭 콘솔 이벤트가 발생한다
            이건 리액트측에서 의도한 것으로 포탈을 통해 따로 빼둔 컴포도 동일한 이벤트가 발생하도록, 버블링이 이루어질 수 있도록 해준다 */}

            <button style={{ position: 'absolute' }} onClick={onClick2}>butotn</button>
        </>
    );
};

export default Dialog;