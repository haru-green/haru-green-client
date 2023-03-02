import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import loginWithAuthCode from '@/api/loginWithAuthCode';
import { Kakao, Logo } from '@/assets/icons';
import { isLogin } from '@/util';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const kakaoLogin = () =>
  (window.location.href = `${process.env.REACT_APP_KAKAO_AUTH_URI}&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`);

const Login = () => {
  const navigate = useNavigate();
  const kakaoAuthCode = new URLSearchParams(window.location.search).get('code');
  if (kakaoAuthCode) loginWithAuthCode(kakaoAuthCode);

  useEffect(() => {
    if (isLogin()) navigate('/');
  }, []);

  return (
    <main className={cx('main')}>
      <div className={cx('content')}>
        <Logo />
        <button
          className={cx('button')}
          type="button"
          aria-label="kakao"
          onClick={kakaoLogin}
        >
          <Kakao style={{ position: 'absolute', left: '30px', width: 24 }} />
          <span>카카오 로그인</span>
        </button>
      </div>
    </main>
  );
};

export default Login;
