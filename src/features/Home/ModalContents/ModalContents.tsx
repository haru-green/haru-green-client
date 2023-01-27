import classNames from 'classnames/bind';

import styles from './ModalContents.module.scss';

const cx = classNames.bind(styles);

const tutorials = [
  {
    first_line: '하루 1번만',
    second_line: '퀴즈에 참여할 수 있어요',
  },
  {
    first_line: '퀴즈 3문제를 모두 맞춰야',
    second_line: '등급이 올라가요',
  },
  {
    first_line: '환경 마스터 숲이 되면',
    second_line: '모든 퀴즈는 끝나요',
  },
];

const ModalContents = () => {
  return (
    <div className={cx('wrapper')}>
      {tutorials.map((tutorial, idx) => {
        return (
          <div key={idx} className={cx('tutorial')}>
            <div className={cx('number')}>{idx + 1}</div>
            {tutorial.first_line}
            <br />
            {tutorial.second_line}
          </div>
        );
      })}
    </div>
  );
};

export default ModalContents;
