import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type ButtonProps = {
  text: string;
  isCorrectBtnClicked?: boolean;
  isWrongBtnClicked?: boolean;
  onClick?: () => void;
};

const Button = ({
  text,
  isCorrectBtnClicked,
  isWrongBtnClicked,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'button',
        (isCorrectBtnClicked || isWrongBtnClicked) && 'clicked'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
