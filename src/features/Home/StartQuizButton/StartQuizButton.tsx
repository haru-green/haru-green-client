import classNames from 'classnames/bind';

import styles from './StartQuizButton.module.scss';

const cx = classNames.bind(styles);

const StartQuizButton = () => {
  return <button className={cx('wrapper')}>오늘의 퀴즈 풀러가기</button>;
};

export default StartQuizButton;
