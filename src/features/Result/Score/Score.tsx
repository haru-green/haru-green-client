import classNames from 'classnames/bind';

import styles from './Score.module.scss';

const cx = classNames.bind(styles);

const scoreToNumber = (score: string) => {
  switch (score) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    default:
      return 0;
  }
};

type ScoreType = {
  score: string;
};

const Score = ({ score }: ScoreType) => {
  return (
    <div className={cx('outer', score)}>
      <div className={cx('inner', score)}>{scoreToNumber(score)}</div>
    </div>
  );
};

export default Score;
