import classNames from 'classnames/bind';

import styles from './CharacterFrame.module.scss';

const cx = classNames.bind(styles);

type CharacterFrameProps = {
  character: string;
  imgSrc: string;
};

const CharacterFrame = ({ character, imgSrc }: CharacterFrameProps) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('border')}>
        <img alt="character" src={imgSrc} />
        <p className={cx('name')}>{character}</p>
      </div>
    </div>
  );
};

export default CharacterFrame;
