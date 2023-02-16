import classNames from 'classnames/bind';

import styles from './ProgressBar.module.scss';

const cx = classNames.bind(styles);

type ProgressBarProps = {
  progress: number;
};

const progressToClassName = (progress: number) => {
  switch (progress) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
  }
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bar', progressToClassName(progress))}></div>
    </div>
  );
};

export default ProgressBar;
