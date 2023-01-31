import classNames from 'classnames/bind';
import { useState } from 'react';

import ModalContents from '@/features/Result/ModalContents';
import Score from '@/features/Result/Score';
import Modal from '@/shared/Modal';
import NavigateButton from '@/shared/NavigateButton';
import OutlinedButton from '@/shared/OutlinedButton';

import styles from './Result.module.scss';

const cx = classNames.bind(styles);

const Result = () => {
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState<boolean>(false);

  const openModal = () => setIsAnswerModalOpen(true);
  const closeModal = () => setIsAnswerModalOpen(false);

  return (
    <>
      <div className={cx('wrapper')}>
        <Score score="three" />
        <div className={cx('result')}>
          <p>두부님은 총</p>
          <p className={cx('score')}>
            <span>0문제</span>
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
          content={<ModalContents />}
        />
      )}
    </>
  );
};

export default Result;
