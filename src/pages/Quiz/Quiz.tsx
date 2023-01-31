import classNames from 'classnames/bind';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import QuizImage from '@/assets/images/quiz-1.png';
import Button from '@/features/Quiz/Button';
import NavigateButton from '@/shared/NavigateButton';

import styles from './Quiz.module.scss';

const cx = classNames.bind(styles);

const Quiz = () => {
  const { id } = useParams();

  const [isCorrectBtnClicked, setIsCorrectBtnClicked] = useState(false);
  const [isWrongBtnClicked, setIsWrongBtnClicked] = useState(false);

  const onCorrectBtnClick = () => {
    setIsCorrectBtnClicked(true);
    setIsWrongBtnClicked(false);
  };

  const onWrongBtnClick = () => {
    setIsCorrectBtnClicked(false);
    setIsWrongBtnClicked(true);
  };

  const nextQuizId = String(Number(id) + 1);

  return (
    <>
      <div className={cx('wrapper')}>
        <img alt="quiz-image" src={QuizImage} />
        <div className={cx('contents')}>
          <p className={cx('quiz')}>
            일회용 종이컵이나 플라스틱컵 <br />
            대부분 재활용이 된다
          </p>
          <p className={cx('direction')}>선택 후 다음을 눌러주세요</p>
        </div>
        <div className={cx('buttonWrapper')}>
          <Button
            text="O"
            isCorrectBtnClicked={isCorrectBtnClicked}
            onClick={onCorrectBtnClick}
          />
          <Button
            text="X"
            isWrongBtnClicked={isWrongBtnClicked}
            onClick={onWrongBtnClick}
          />
        </div>
        <nav className={cx('nav')}>
          <NavigateButton text="다음" destination={`/quiz/${nextQuizId}`} />
        </nav>
      </div>
    </>
  );
};

export default Quiz;
