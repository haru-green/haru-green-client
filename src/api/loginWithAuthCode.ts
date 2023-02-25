import axios from '@/api/axios';

const loginWithAuthCode = async (authCode: string) => {
  axios.get(`/user/login?code=${authCode}`).then((res) => {
    document.cookie = `auth_grant=${res.headers['x-auth-grant']}`;
    document.cookie = `auth_token=${res.headers['x-auth-token']}`;
    document.cookie = `auth_refresh=${res.headers['x-auth-refresh']}`;
  });
};

export default loginWithAuthCode;
