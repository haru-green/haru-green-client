import classNames from 'classnames/bind';

import CloseIcon from '@/assets/icons/close.svg';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

type ModalProps = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div onClick={closeModal} className={cx('modalOverlay')}>
      <div className={cx('modal')}>
        <button onClick={closeModal} className={cx('closeButton')}>
          <img alt="close" src={CloseIcon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
