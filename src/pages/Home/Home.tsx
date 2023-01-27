import classNames from 'classnames/bind';
import { useState } from 'react';

import CharacterFrame from '@/features/Home/CharacterFrame';
import ModalContents from '@/features/Home/ModalContents';
import StartQuizButton from '@/features/Home/StartQuizButton';
import Modal from '@/shared/Modal';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <CharacterFrame character={'character'} />
        </div>
        <StartQuizButton />
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
