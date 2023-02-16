import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './NavigateButton.module.scss';

const cx = classNames.bind(styles);

type NavigateButtonProps = {
  text: string;
  destination: string;
  disabled?: boolean;
};

const NavigateButton = ({
  text,
  destination,
  disabled,
}: NavigateButtonProps) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(destination);
  };

  const disabledClass = disabled ? 'disabled' : '';

  return (
    <button
      disabled={disabled}
      onClick={navigateTo}
      className={cx('button', disabledClass)}
    >
      {text}
    </button>
  );
};

export default NavigateButton;
