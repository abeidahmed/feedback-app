import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useModalType } from 'store/modal';
import OutsideClickHandler from 'react-outside-click-handler';
import { IconButton } from 'components/Buttons';

function ModalWrapper({ modalTitle, size = 'sm', children }) {
  const { modalOff } = useModalType();

  const modalClass = cn([
    'inline-block w-full overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full',
    {
      'sm:max-w-lg': size === 'sm',
      'sm:max-w-xl': size === 'md',
      'sm:max-w-2xl': size === 'lg',
    },
  ]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className={modalClass}>
          <OutsideClickHandler onOutsideClick={modalOff}>
            <header className="flex items-center justify-between px-6 border-b border-gray-300 h-14">
              <h2 className="text-xl font-bold">{modalTitle}</h2>
              <IconButton
                icon="x"
                appearance="minimal"
                size="sm"
                marginRight={-12}
                onClick={modalOff}
              />
            </header>
            <div className="p-6 bg-white">{children}</div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
}

ModalWrapper.propTypes = {
  modalTitle: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default ModalWrapper;
