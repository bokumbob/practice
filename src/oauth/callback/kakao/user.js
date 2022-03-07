import axios from 'axios'

export const user = (code) => {
    return function(dispatch, getState, {history}){
        axios({
            method:"GET",
            // url: 'http://3.35.208.142/oauth/callback/kakao?code=${code}',
            url: `http://localhost:3000?code=${code}`,
        })
        .then((res)=>{
            console.log(res)
            const ACCESS_TOKEN = res.data.accessToken;
            localStorage.setItem("token", ACCESS_TOKEN);

            history.replace("/login")
        })
    }
}