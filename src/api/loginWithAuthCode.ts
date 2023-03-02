import axios from '@/api/axios';

const loginWithAuthCode = async (authCode: string) => {
  axios
    .get(`/user/login?code=${authCode}`)
    .then((res) => {
      localStorage.setItem('authToken', res.headers['x-auth-token']);
      localStorage.setItem('refreshToken', res.headers['x-refresh-token']);
      localStorage.setItem('authGrant', res.headers['x-auth-grant']);
    })
    .then(() => {
      location.reload();
    });
};

export default loginWithAuthCode;
