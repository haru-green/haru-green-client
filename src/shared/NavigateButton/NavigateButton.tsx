import classNames from 'classnames/bind';
import { useNavigate, redirect } from 'react-router-dom';

import styles from './NavigateButton.module.scss';

const cx = classNames.bind(styles);

type NavigateButtonProps = {
  text: string;
  destination: string;
};

const NavigateButton = ({ text, destination }: NavigateButtonProps) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(destination);
  };

  return (
    <button onClick={navigateTo} className={cx('button')}>
      {text}
    </button>
  );
};

export default NavigateButton;
