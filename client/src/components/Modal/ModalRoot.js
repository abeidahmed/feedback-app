import React from 'react';
import ReactDOM from 'react-dom';
import { useModalType } from 'store/modal';
import * as modal from './types';
import { AddTag } from './AddTag';

const MODAL_COMPONENTS = {
  [modal.ADD_TAG]: AddTag,
};

function ModalRoot() {
  const { modalType, modalProps } = useModalType();

  if (!modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return ReactDOM.createPortal(
    <SpecificModal {...modalProps} />,
    document.getElementById('portal')
  );
}

export default ModalRoot;
