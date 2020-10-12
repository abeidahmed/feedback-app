import React from 'react';
import { useModalType } from 'store/modal';
import { OutsideClickHandler } from 'components/Container';
import { IconButton } from 'components/Button';
import { Icon } from 'components/Icon';

function ModalWrapper({ modalTitle, children }) {
  const { modalOff } = useModalType();

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <OutsideClickHandler
          onOutsideClick={modalOff}
          className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <header className="flex items-center justify-between px-6 border-b border-gray-300 h-14">
            <h2 className="text-xl font-bold">{modalTitle}</h2>
            <IconButton size="xs" className="-mr-3" onClick={modalOff}>
              <Icon icon="x" className="w-5 h-5" />
            </IconButton>
          </header>
          <div className="p-6 bg-white">{children}</div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default ModalWrapper;
