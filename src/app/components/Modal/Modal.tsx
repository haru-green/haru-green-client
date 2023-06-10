import { ReactNode } from 'react';

import Icon from '@/app/components/Icon';

interface ModalProps {
  children: ReactNode;
  title: string;
}

function Modal({ children, title }: ModalProps) {
  return (
    <div className="rounded bg-white">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <Icon name="close" size={12} />
      </div>
      {children}
    </div>
  );
}

export default Modal;
