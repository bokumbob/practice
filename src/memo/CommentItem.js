import React, { memo, Profiler, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './CommentItem.css'

const CommentItem = ({ title, content, likes, onClick }) => {

    const [click, setClick] = useState(0)
    // 이렇게 다시 한 번 나 자신이 바뀌어야 하는 상태값을 추가한다면
    // 해당하는 것만 다시 그려진다
    // 8번째를 클릭해 상태를 바꾼다면 중간에 8번째가 다시 그려진다
    // 뿐만 아니라 모두 재렌더링 되므로 레이트 함수도 다시 그려진다
    // 그래서 다른 메모이제이션 되어야 하는 함수에 유즈메모를 써준다

    function onRenderCallback(
        id, 
        phase, 
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
        // 각각이 의미하는 건 공식 문서로 ㄱㄱ
    ){
        console.log(`actualDuration(${title} : ${actualDuration})`)
        // 렌더링하느라 걸린 시간   
    }
    // const handleClick =() => {
    //     alert(`${title} 나 눌림`)
    // }
    // 이렇게 나 자신이 갖는 함수라면 메모이제이션이 그대로 유지된다

    const handleClick = () => {
        onClick();
        setClick(prev => prev + 1)
        alert(`${title} 눌림`)
    }

    const rate = useMemo(() => {
        console.log("rate ck")
        return likes > 10 ? 'good' : 'bad'
    },[likes])
// 이렇게 감싸주면 위 함수는 값이 같을 때까진 계속 리렌더 하지 않음

    return (
        <Profiler id="commentItem" onRender={onRenderCallback}>
            <div className='commentItem' onClick={handleClick}>
                <span>{title}</span>
                <br />
                <span>{content}</span>
                <br />
                <span>{likes}</span>
                <br />
                <span>{rate}</span>
                {/* useMemo 했을 땐 함수가 리턴값만 남아서 () 안 붙여도 */}
                <br />
                <span>{click}</span>
            </div>
        </Profiler>
    );
};

// export default CommentItem;
// 위처럼 하면 1234 12345 123456 이렇게 다 리렌더링 함
export default memo(CommentItem);
// 이러면 메모이제이션이 된 거임
// 이미 메모이제이션 된 컴포들은 그냥 다시 쓰는 식으로 성능 개선
// 부모에서 계속 다른 리스트들을 props로 주는데 그 props 중 동일한 건 메모이제이션 한 것으로 쓴다