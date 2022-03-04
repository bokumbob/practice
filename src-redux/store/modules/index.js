import {combineReducers} from 'redux'
import counter from './counter'
import waiting from './waiting'

// 서브 리듀서들을 루트리듀서로 합치기
export default combineReducers({
    counter,
    waiting
    // 리듀서 목록들을 넣어주면 됨
    // 카운터만 넣어두면 초기값은
    /* {
    counter:{
        color:'red',
        number:0,
    },
    }
    */
})