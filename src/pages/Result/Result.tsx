import classNames from 'classnames/bind';

import StartQuizButton from '@/features/Home/StartQuizButton';
import Score from '@/features/Result/Score';
import NavigateButton from '@/shared/NavigateButton';

import styles from './Result.module.scss';

const cx = classNames.bind(styles);

const Result = () => {
  return (
    <div className={cx('wrapper')}>
      <Score score="three" />
      <div className={cx('result')}>
        <p>두부님은 총</p>
        <p className={cx('score')}>
          <span>0문제</span>
          <span> 맞췄어요</span>
        </p>
        <StartQuizButton
          onClick={() => {
            console.log('hi');
          }}
        />
      </div>
      <NavigateButton text={'홈으로'} />
    </div>
  );
};

export default Result;
