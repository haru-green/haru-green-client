import classNames from 'classnames/bind';

import CloseIcon from '@/assets/icons/close.svg';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

type ModalProps = {
  closeModal: (e: any) => void;
};

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div onClick={closeModal} className={cx('modalOverlay')}>
      <div onClick={(e) => e.stopPropagation()} className={cx('modal')}>
        <button onClick={closeModal} className={cx('closeButton')}>
          <img alt="close" src={CloseIcon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
