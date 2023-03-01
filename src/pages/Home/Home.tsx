import classNames from 'classnames/bind';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getUser from '@/api/getUser';
import CharacterFrame from '@/features/Home/CharacterFrame';
import CharacterFrameSkeleton from '@/features/Home/CharacterFrameSkeleton';
import ModalContents from '@/features/Home/ModalContents';
import Modal from '@/shared/Modal';
import OutlinedButton from '@/shared/OutlinedButton';
import { IUser } from '@/type';
import { wasSolvedToday } from '@/util';

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
  const [user, setUser] = useState<IUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigateToQuiz = () => navigate('/quiz/1');

  const lastSolvedDate = useMemo(() => {
    const answerTime = user?.answerTime;
    const pattern = /\d{4}-\d{2}-(\d{2})/;
    const match = answerTime?.match(pattern);
    if (match) return match[1];
  }, [user]);

  const fetchUser = async () => {
    const user = await getUser<IUser>();
    console.log(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  useEffect(() => {
    if (!document.cookie.includes('auth_token')) navigate('/login');
    fetchUser();
    setIsLoading(false);
  }, []);

  return (
    <>
      <main className={cx('main')}>
        <div className={cx('back')}>
          <div className={cx('title')}>
            <p className={cx('nickname')}>
              {isLoading ? '하루그린' : user?.nickname}님<span> 반가워요</span>
            </p>
            <p>오늘도 환경에 한 발짝 더 가까워져요</p>
          </div>
          {isLoading ? (
            <CharacterFrameSkeleton />
          ) : (
            <CharacterFrame
              character={characters[user?.level ? user?.level - 1 : 0]}
              imgSrc={require(`@/assets/images/characters/character-${
                user?.level || 1
              }.png`)}
            />
          )}
        </div>
        <OutlinedButton
          text="오늘의 퀴즈 풀러가기"
          onClick={navigateToQuiz}
          disabled={wasSolvedToday(lastSolvedDate)}
        />
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
