import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterFrame from '@/features/Home/CharacterFrame';
import ModalContents from '@/features/Home/ModalContents';
import StartQuizButton from '@/features/Home/StartQuizButton';
import Modal from '@/shared/Modal';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const characters = [
  '더미',
  '분해 전 쓰레기',
  '분해되는 쓰레기',
  '깨끗한 토지',
  '환경 어린이 새싹',
  '환경 잘알 꽃',
  '환경 선생 나무',
  '환경 마스터 숲',
];

const Home = () => {
  const navigate = useNavigate();
  const [userLevel, setUserLevel] = useState<number>(5);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateToQuiz = () => {
    navigate('/quiz/1');
  };

  return (
    <>
      <main className={cx('main')}>
        <div className={cx('back')}>
          <div className={cx('title')}>
            <p className={cx('nickname')}>
              두부님<span> 반가워요</span>
            </p>
            <p>오늘도 환경에 한 발짝 더 가까워져요</p>
          </div>
          <CharacterFrame
            character={characters[userLevel - 1]}
            imgSrc={require(`@/assets/images/characters/character-${userLevel}.png`)}
          />
        </div>
        <StartQuizButton onClick={navigateToQuiz} />
        <button onClick={openModal} className={cx('tutorial')}>
          튜토리얼 보러가기
        </button>
      </main>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          title="튜토리얼"
          content={<ModalContents />}
        />
      )}
    </>
  );
};

export default Home;
