import classNames from 'classnames/bind';

import styles from './ModalContents.module.scss';

const cx = classNames.bind(styles);

const sampleAnswers = [
  {
    title: '일회용 종이컵이나 플라스틱 컵은 대부분 재활용이 된다',
    content:
      'X, 버려지는 일회용컵 중 재활용되는 비율은 단 1% 나머지는 소각되거나 매립된다',
  },
  {
    title: '종이컵에 이물질이 묻어있는 경우 일반쓰레기로 버린다',
    content:
      'O, 종이컵 분리수거를 위해서는 이물질 없이 깨끗하게 제거 후에 말려 종이컵만 따로 모아서 분리수거 해야한다',
  },
  {
    title: '일회용 종이컵이나 플라스틱 컵은 대부분 재활용이 된다',
    content: 'X, 플라스틱이 가장 많이 사용되는 용도는 포장 및 일회용품이다',
  },
];

const ModalContents = () => {
  return (
    <div className={cx('wrapper')}>
      {sampleAnswers.map((sampleAnswer, idx) => {
        return (
          <div key={idx} className={cx('box')}>
            <h3 className={cx('number')}>문제 {idx + 1}</h3>
            <div className={cx('answer')}>
              <p>{sampleAnswer.title}</p>
              <p>{sampleAnswer.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModalContents;
