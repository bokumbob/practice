import {createAction, handleActions} from 'redux-actions'

const CHANGE_INPUT = 'waiting/CHANGE_INPUT' ; // 인풋값 변경
const CREATE = 'waiting/CREATE' //명단에 이름 추가
const ENTER = 'waiting/ENTER' //입장
const LEAVE = 'waiting/LEAVE' //퇴장

let id = 3;

// createAction으로 액션 만들기
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => ({text, id:id++}));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);
/* 
두 번째 인자는 payloadCreator인데 payload(액션에서 사용할 파라미터의 필드명, FSA에서는 저거로 통일됨)를 어떻게 정할지 설정
생략하면 payload => payload가 디폴트 값이라 생략해도 문제 없음*/

// 초기 상태 정의
const initialState = {
    input:'',
    list:[
        {
            id:0,
            name:'홍길동',
            entered: true,
        },
        {
            id:1,
            name:'콩쥐',
            entered:false,
        },
        {
            id:2,
            name:'팥쥐',
            entered:false,
        },
    ],
};

// handleActions 로 리듀서 함수 작성
export default handleActions(
    {
        [CHANGE_INPUT]:(state,action) => ({
            ...state,
            input:action.payload,
        }),
        [CREATE]: (state,action) => ({
            ...state,
            list:state.list.concat({
                id:action.payload.id,
                name:action.payload.text,
                enterde:false,
            }),
        }),
        [ENTER]:(state,action) => ({
            ...state,
            list:state.list.map(
                item =>
                item.id === action.payload ? {...item, entered: !item.entered} : item
            ),
        }),
        [LEAVE]: (state, action) => ({
            ...state,
            list:state.list.filter(item => item.id !== action.payload),
        }),
    },
    initialState
);
// handleActions를 사용하면 스위치 / 케이스문을 사용할 필요 없이 각 액션 타입마다 업데이터 함수를 구현
// 배열을 다루는 것들은 concat, map, filter를 사용해 불변성 유지하며 배열에 새로운 값 지정