import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

const Comments = ({comments}) => {
    const handle = useCallback(()=>{{
        console.log("눌림")
    }},[])
    // 이렇게 함수 만들어도 소용x 왜?
    // comments 의 상태는 매 초마다 하나씩 늘어남 => 계속 변경이 일어남
    // 변경이 일어난다 => Comments도 계속 리렌더링 됨
    // handle 함수도 계속 다시 렌더링 됨
    // 이럴 때 사용하는 게 useCallback
    return (
        <div>
            {comments.map(comment => <CommentItem key={comment.id} title={comment.title} content={comment.content} likes={comment.likes} onClick={handle} />)}
            {/* {comments.map(comment => <CommentItem key={comment.id} title={comment.title} content={comment.content} likes={comment.likes} onClick={()=> console.log("눌림")} />)} */}
            {/* 온클릭 줄 때 이런 식으로 부모서부터 주면 자식 요소를 메모이제이션 해도 먹히질 않는다
            왜? 메모이제이션은 프롭스가 동일한 상태일 때만 값을 저장해둠 
            이렇게 인라인식으로 함수 만들어서 주면 인라인 함수는 렌더링 때마다 새 함수를 만들기 때문에 아무리 메모를 해도 안되는 거*/}
        </div>
    );
};

export default Comments;