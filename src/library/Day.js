import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";


// https://jsikim1.tistory.com/196
const Day = () => {
    const [data, setData] = useState(null)
    const [af, setAf] = useState(null)

    dayjs.extend(isSameOrAfter)

    var date = dayjs("2021-10-09");
    // console.log(date.isAfter("2021-10-09")); // false
    // 날짜 객체가 지정한 시간 단위에서 특정 날짜보다 이후인지 확인 가능
    date.isSameOrAfter("2021-10-09"); // true
    // 날짜 객체가 지정한 시간 단위에서 특정 날짜보다 이후이거나 같은지 확인 가능

    // dayjs.locale()

    // let momentData = dayjs("2021-12-10").format("DD/MM/YY HH:mm:ss");
    // let m = dayjs("2022-03-03 10:10:10");
    // console.log(m.set("M", 10).format())
    // 해당 만큼 플러스
    // let m = dayjs();
    // console.log(m.get("m"))
    // console.log(momentData)
    
    const a = () => {
        setData(dayjs())
        if(data){
            setAf(data.add(10, "s").format())

        }
    console.log(data)
    console.log(af)
    }

    useEffect(()=>{
        if(data.formet().isSameOrAfter(af)){
            alert("asdsad")
        }
    })

    return (
        <div>
            {/* <p>{momentData}</p> */}
            <p onClick={a}>클릭</p>
        </div>
    );
};
export default Day;