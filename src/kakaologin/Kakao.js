const CLIENT_ID = "74cea29c4b08065f58fade57e2e39b81"
// rest api키
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao"
// 로그인 끝내고 or 에러시 돌아올 페이지
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    // https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${74cea29c4b08065f58fade57e2e39b81}&redirect_uri=${REDIRECT_URI}
