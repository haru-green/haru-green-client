import classNames from 'classnames/bind';

import { Logo } from '@/assets/icons';
import KaKaoLogin from '@/assets/images/kakaoLogin.png';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <main className={cx('main')}>
      <div className={cx('content')}>
        <Logo />
        <button>
          <img alt="kakao" src={KaKaoLogin} />
        </button>
      </div>
    </main>
  );
};

export default Login;
