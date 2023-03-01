import classNames from 'classnames/bind';

import styles from './CharacterFrameSkeleton.module.scss';

const cx = classNames.bind(styles);

const CharacterFrameSkeleton = () => {
  return <div className={cx('wrapper')}></div>;
};

export default CharacterFrameSkeleton;
