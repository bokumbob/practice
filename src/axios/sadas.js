import React, { useState } from 'react';
import axios from 'axios';

const Sadas = () => {
    // axios.get('https://my-json-server.typicode.com/zofqofhtltm8015/fs/user')
    // .then((response) => {
    //     console.log(response.data)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
    // const axios = require('axios')
    // axios({
    //     method: 'get',
    //     url: 'https://www.naver.com/'
    // }).then((res) => {
    //     console.log(res)
    // })



    // ajax 방식

    // function reqListener (e) {
    //     console.log(e.currentTarget.response);
    // }
    
    // var oReq = new XMLHttpRequest();
    // var serverAddress = "https://jsonplaceholder.typicode.com/posts";
    
    // oReq.addEventListener("load", reqListener);
    // oReq.open("GET", serverAddress);
    // oReq.send();

    const [data, setData] = useState(null)

    // axios 방식
    const onClick = async() => {
        // async 사용시 그 함수의 반환값은 promise가 됨
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data)
        } catch (error){
            console.log(error)
        }
    }

        
    //     axios({
    //         method: 'GET',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
    //         // data: {
    //         //   firstName: 'Yongseong',
    //         //   lastName: 'Kim'
    //         // }
    //       })
    //       .then((response)=>setData(response.data))
    //       .catch((error)=>console.log(error))
    // }

    
    // axios({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     // data: {
    //     //   firstName: 'Yongseong',
    //     //   lastName: 'Kim'
    //     // }
    //   })
    //   .then((response)=>setData(response.data))
    //   .catch((error)=>console.log(error))



    // fetch 방식
    // const url = 'https://jsonplaceholder.typicode.com/posts'
    // const option = {
    //     method:'POST',
    //     header:{
    //         'Accept': 'application/json',
    //         'Content-Type':'application/json;charset=UTP-8'
    //     },
    //     body:JSON.stringify({
    //         name:'sw',
    //         age:20
    //     })
    // }

    // fetch(url,option)
    // .then(response => console.log(response))
    
    // let w

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => {console.log(json)
    // w = json} )

    return (
        <div>
            <button onClick={onClick}>불러오기</button>
            {
                data && <textarea rows={500} cols={200} value={JSON.stringify(data, null, 2)} readOnly={true} />
            }
        </div>
    );
};

export default Sadas;