import classNames from 'classnames/bind';

import styles from './StartQuizButton.module.scss';

const cx = classNames.bind(styles);

type StartQuizButtonProps = {
  onClick: () => void;
};

const StartQuizButton = ({ onClick }: StartQuizButtonProps) => {
  return (
    <button onClick={onClick} className={cx('wrapper')}>
      오늘의 퀴즈 풀러가기
    </button>
  );
};

export default StartQuizButton;
