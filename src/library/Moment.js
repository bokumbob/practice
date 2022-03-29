// import React, { useRef, useState } from 'react';
// import moment from 'moment-timezone'
// import "moment/locale/ko";

// const Moment = () => {

//     const momentData = moment();
//     const newMomentData = momentData.add(1, 'week')
//     const cloneNewMomentData = newMomentData.clone().add(1, 'week')

//     const [day, setDay] = useState("")
//     const birthDayRef = useRef(null)

//     const handle = (e) => {
//         setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"))
//         // dddd는 데이 표현
//     }

//     return (
//         <div>
//             <h1>Moment</h1>
//             <div>Immutable Check</div>
//             <div>{momentData.format()}</div>
//             <br />
//             <div>{newMomentData.format()}</div>
//             <br />
//             <div>{cloneNewMomentData.format()}</div>
//             <br />
//             <br />
//             <br />
//             <div>
//                 두 날짜 비교
//             </div>
//             <div>
//                 <input type="date" ref={birthDayRef} onChange={handle}/> 
//                 <p>무슨 요일이었을까</p>
//                 <p>{day}</p>
//             </div>


//             <br />
//             <br />
//             <br />
//             <br />
//             <div>두 날짜 비교</div>
//             <div>2021-07-17 03:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
//             <div>{`${moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hour")} 시간`}</div>
//             {/* 모멘트끼리 시간을 기준으로 비교함 */}
//         </div>
//     );
// };

// export default Moment;

//             // {/* <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
//             // <div>
//             //     {moment("07-17-2021").format("YYYY년 M월 D일")}
//             // </div> */}
//             // {/* <div>Leap year korea</div>
//             // <div>
//             //     2017년 1월 1일에 1년 빼기 : 
//             //     {moment.tz("2017-01-01", "Asia/Seoul").add(-1, "year").format()}
//             //     {/* 빼기는 subtract도 된다 */}
//             // {/* </div>
//             // <div>
//             //     2017년 1월 1일에 365일 빼기 : 
//             //     {moment.tz("2017-01-01", "Asia/Seoul").add(-365, "day").format()}
//             // </div> */}
//             // {/* <div>Summer Time 뉴엵</div>
//             // <div>
//             //     2018년 3월 10일 13시에 하루 더하기 : 
//             //     {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
//             // </div>
//             // <div>
//             //     2018년 3월 10일 13시에 24시간 더하기 : 
//             //     {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
//             // </div> */}