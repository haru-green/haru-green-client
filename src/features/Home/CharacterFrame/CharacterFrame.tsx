import classNames from 'classnames/bind';

import styles from './CharacterFrame.module.scss';

const cx = classNames.bind(styles);

type CharacterFrameProps = {
  character: string;
};

const CharacterFrame = ({ character }: CharacterFrameProps) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('border')}>{character}</div>
    </div>
  );
};

export default CharacterFrame;
