'use client';

import { ReactNode, useCallback, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  title: string;
  className?: string;
  onClose?: () => void;
};

function useDialog({ title, className, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const showModal = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = useCallback((data?: any) => {
    dialogRef.current?.close(data);
  }, []);

  const Dialog = ({ children }: { children: ReactNode }) => {
    return (
      <dialog
        ref={dialogRef}
        aria-modal
        onClose={onClose}
        className={className}
      >
        <div className="flex flex-col">
          <header className="flex justify-between items-center mb-5">
            <h2 className="font-bold">{title}</h2>
            <XMarkIcon
              className="w-4 h-4 cursor-pointer hover:text-sky-500"
              onClick={() => closeModal()}
            />
          </header>
          <main>{children}</main>
        </div>
      </dialog>
    );
  };

  return {
    Dialog,
    dialogRef,
    showModal,
    closeModal,
  };
}

export default useDialog;
