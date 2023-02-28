import classNames from 'classnames/bind';

import { IQuiz } from '@/type';

import styles from './ModalContents.module.scss';

const cx = classNames.bind(styles);

type ModalContentsProps = {
  quizAnswer: IQuiz[];
};

const ModalContents = ({ quizAnswer }: ModalContentsProps) => {
  return (
    <div className={cx('wrapper')}>
      {quizAnswer.map((quiz: any, idx: number) => {
        return (
          <div key={idx} className={cx('box')}>
            <h3 className={cx('number')}>문제 {idx + 1}</h3>
            <div className={cx('answer')}>
              <p className={cx('title')}>{quiz.title}</p>
              <p className={cx('description')}>
                {quiz.ox ? 'O' : 'X'}, {quiz.commentary}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModalContents;
