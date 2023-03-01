import classNames from 'classnames/bind';

import styles from './OutlinedButton.module.scss';

const cx = classNames.bind(styles);

type StartQuizButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const OutlinedButton = ({ text, onClick, disabled }: StartQuizButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx('wrapper', disabled && 'disabled')}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
