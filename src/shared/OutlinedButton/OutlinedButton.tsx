import classNames from 'classnames/bind';

import styles from './OutlinedButton.module.scss';

const cx = classNames.bind(styles);

type StartQuizButtonProps = {
  text: string;
  onClick: () => void;
};

const OutlinedButton = ({ text, onClick }: StartQuizButtonProps) => {
  return (
    <button onClick={onClick} className={cx('wrapper')}>
      {text}
    </button>
  );
};

export default OutlinedButton;
