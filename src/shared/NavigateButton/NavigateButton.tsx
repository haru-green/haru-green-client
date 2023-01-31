import classNames from 'classnames/bind';

import styles from './NavigateButton.module.scss';

const cx = classNames.bind(styles);

type NavigateButtonProps = {
  text: string;
};

const NavigateButton = ({ text }: NavigateButtonProps) => {
  return <button className={cx('button')}>{text}</button>;
};

export default NavigateButton;
