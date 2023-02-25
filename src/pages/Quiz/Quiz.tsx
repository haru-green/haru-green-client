import classNames from 'classnames/bind';

import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import QuizImage from '@/assets/images/quiz-1.png';
import Button from '@/features/Quiz/Button';
import ProgressBar from '@/features/Quiz/ProgressBar';

import { QuizContext } from '@/index';

import NavigateButton from '@/shared/NavigateButton';

import styles from './Quiz.module.scss';

const cx = classNames.bind(styles);

const Quiz = () => {
  const { id } = useParams();
  const quizContext = useContext(QuizContext);
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

  const markQuizAnswer = () => {
    quizContext.push(isCorrectBtnClicked);
  };

  const getNextDestination = useCallback(() => {
    const nextId = Number(id) + 1;
    if (nextId > 3) {
      return '/result';
    }
    return `/quiz/${nextId}`;
  }, [id]);

  const destination = useMemo(() => getNextDestination(), [getNextDestination]);
  };

  useEffect(() => {
    setIsCorrectBtnClicked(false);
    setIsWrongBtnClicked(false);
  }, [id]);

  return (
    <>
      <ProgressBar progress={Number(id)} />
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
          <NavigateButton
            text="다음"
            destination={destination}
            sideEffect={markQuizAnswer}
            disabled={!isCorrectBtnClicked && !isWrongBtnClicked}
          />
        </nav>
      </div>
    </>
  );
};

export default Quiz;
