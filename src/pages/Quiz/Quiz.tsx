import classNames from 'classnames/bind';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import getQuiz from '@/api/getQuiz';
import { answerState } from '@/atom';
import Button from '@/features/Quiz/Button';
import ProgressBar from '@/features/Quiz/ProgressBar';
import NavigateButton from '@/shared/NavigateButton';
import { IQuiz } from '@/type';
import { getSessionUser, parseQuiz } from '@/util';

import styles from './Quiz.module.scss';

const cx = classNames.bind(styles);

const Quiz = () => {
  const { id } = useParams<string>();

  const user = getSessionUser();

  const [answer, setAnswer] = useRecoilState(answerState);

  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [isCorrectBtnClicked, setIsCorrectBtnClicked] = useState(false);
  const [isWrongBtnClicked, setIsWrongBtnClicked] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onCorrectBtnClick = () => {
    setIsCorrectBtnClicked(true);
    setIsWrongBtnClicked(false);
  };

  const onWrongBtnClick = () => {
    setIsCorrectBtnClicked(false);
    setIsWrongBtnClicked(true);
  };

  const markQuizAnswer = () => {
    setAnswer([...answer, isCorrectBtnClicked]);
  };

  const getNextDestination = useCallback(() => {
    const nextId = Number(id) + 1;
    if (nextId > 3) {
      return '/result';
    }
    return `/quiz/${nextId}`;
  }, [id]);

  const destination = useMemo(() => getNextDestination(), [getNextDestination]);

  const imageSrc = useMemo(() => {
    if (quiz?.level && id) return quiz?.level * Number(id);
  }, [id]);

  const fetchQuiz = async () => {
    const quiz = await getQuiz<IQuiz[]>(user?.email);
    if (quiz) setQuiz(quiz[Number(id) - 1]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id === '1') setAnswer([]);
    setIsCorrectBtnClicked(false);
    setIsWrongBtnClicked(false);
  }, [id]);

  useEffect(() => {
    fetchQuiz();
  }, [id]);

  return (
    <>
      <ProgressBar progress={Number(id)} />
      <div className={cx('wrapper')}>
        <img
          alt="quiz-image"
          src={isLoading ? '' : require(`@/assets/images/quiz/quiz-1.png`)}
        />
        <div className={cx('contents')}>
          <p className={cx('quiz')}>{parseQuiz(quiz?.title)}</p>
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
