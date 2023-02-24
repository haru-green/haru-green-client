import classNames from 'classnames/bind';

import axios from '@/api/axios';
import { Logo } from '@/assets/icons';
import KaKaoLogin from '@/assets/images/kakaoLogin.png';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const kakaoLogin = () => {
  window.location.href = `${process.env.REACT_APP_KAKAO_AUTH_URI}&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
};

const Login = () => {
  const kakaoAuthCode = new URLSearchParams(window.location.search).get('code');
  if (kakaoAuthCode) {
    console.log(kakaoAuthCode);
    axios.get(`/user/login?code=${kakaoAuthCode}`).then((res) => {
      console.log(res);
      const jwtToken = res.headers;
      console.log(jwtToken);
    });
  }
  return (
    <main className={cx('main')}>
      <div className={cx('content')}>
        <Logo />
        <button type="button" aria-label="kakao" onClick={kakaoLogin}>
          <img alt="kakao" src={KaKaoLogin} />
        </button>
      </div>
    </main>
  );
};

export default Login;
