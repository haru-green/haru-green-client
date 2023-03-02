import classNames from 'classnames/bind';

import NavigateButton from '@/shared/NavigateButton';

import styles from './ErrorElement.module.scss';

const cx = classNames.bind(styles);

const ErrorElement = () => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('error-title')}>에러가 발생했습니다.</p>
      <NavigateButton text="홈으로" destination="/" />
    </div>
  );
};

export default ErrorElement;
