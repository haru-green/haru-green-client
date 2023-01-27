import classNames from 'classnames/bind';

import CloseIcon from '@/assets/icons/close.svg';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

type ModalProps = {
  closeModal: (e: any) => void;
  title: string;
  content: React.ReactNode;
};

const Modal = ({ closeModal, title, content }: ModalProps) => {
  return (
    <div onClick={closeModal} className={cx('modalOverlay')}>
      <div onClick={(e) => e.stopPropagation()} className={cx('modal')}>
        <button onClick={closeModal} className={cx('closeButton')}>
          <img alt="close" src={CloseIcon} />
        </button>
        <h2 className={cx('title')}>{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default Modal;
