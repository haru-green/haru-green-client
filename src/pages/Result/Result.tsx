import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getQuizAnswer from '@/api/getQuizAnswer';
import postAnswer from '@/api/postAnswer';
import ModalContents from '@/features/Result/ModalContents';
import Score from '@/features/Result/Score';
import Modal from '@/shared/Modal';
import NavigateButton from '@/shared/NavigateButton';
import OutlinedButton from '@/shared/OutlinedButton';
import { IQuiz } from '@/type';
import { getAnswer } from '@/util';

import styles from './Result.module.scss';

const cx = classNames.bind(styles);

const Result = () => {
  const user = JSON.parse(sessionStorage.getItem('user') as string);

  const navigate = useNavigate();
  const userAnswer = getAnswer();

  const [score, setScore] = useState(0);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState<boolean>(false);
  const [quizAnswer, setQuizAnswer] = useState<IQuiz[]>([]);

  const openModal = () => setIsAnswerModalOpen(true);
  const closeModal = () => setIsAnswerModalOpen(false);

  const scoring = useCallback(
    (userAnswer: boolean[], quizAnswer: IQuiz[]) => {
      let tempScore = 0;
      userAnswer.forEach((answer, index) => {
        if (answer === quizAnswer[index].ox) tempScore += 1;
      });
      console.log(userAnswer, quizAnswer, 'scoring: ', tempScore);
      setScore(tempScore);
    },
    [quizAnswer]
  );

  const fetchQuizAnswer = async (email: string | undefined) => {
    const quizAnswer = await getQuizAnswer(email);
    setQuizAnswer(quizAnswer);
    scoring(userAnswer, quizAnswer);
  };

  useEffect(() => {
    postAnswer(user?.email, userAnswer);
    fetchQuizAnswer(user?.email);
  }, []);

  window.onpopstate = () => {
    navigate('/');
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <Score score={score} />
        <div className={cx('result')}>
          <p>{user?.nickname}님은 총</p>
          <p className={cx('score')}>
            <span className={cx('count')}>{score}문제</span>
            <span> 맞췄어요</span>
          </p>
          <OutlinedButton text="정답 보러가기" onClick={openModal} />
        </div>
        <NavigateButton text="홈으로" destination="/" />
      </div>
      {isAnswerModalOpen && (
        <Modal
          closeModal={closeModal}
          title="정답"
          content={<ModalContents quizAnswer={quizAnswer} />}
        />
      )}
    </>
  );
};

export default Result;
