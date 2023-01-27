import classNames from 'classnames/bind';

import CharacterFrame from '@/features/Home/CharacterFrame';
import StartQuizButton from '@/features/Home/StartQuizButton';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx('main')}>
      <div className={cx('back')}>
        <div className={cx('title')}>
          <p className={cx('nickname')}>
            두부님<span> 반가워요</span>
          </p>
          <p>오늘도 환경에 한 발짝 더 가까워져요</p>
        </div>
        <CharacterFrame character={'characeter'} />
      </div>
      {/*<div className={cx('btnWrapper')}>*/}
      <StartQuizButton />
      <button className={cx('tutorial')}>튜토리얼 보러가기</button>
      {/*</div>*/}
    </main>
  );
};

export default Home;
