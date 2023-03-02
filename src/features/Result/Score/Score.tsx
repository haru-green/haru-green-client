import classNames from 'classnames/bind';

import styles from './Score.module.scss';

const cx = classNames.bind(styles);

type ScoreType = {
  score: number;
};

const matchScoreToString = (score: number) => {
  if (score === 1) return 'one';
  if (score === 2) return 'two';
  if (score === 3) return 'three';
  return 'zero';
};

const Score = ({ score }: ScoreType) => {
  const stringifiedScore = matchScoreToString(score);

  return (
    <div className={cx('outer', stringifiedScore)}>
      <div className={cx('inner', stringifiedScore)}>{score}</div>
    </div>
  );
};

export default Score;
