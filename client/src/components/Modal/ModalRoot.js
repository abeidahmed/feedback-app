import React from 'react';
import ReactDOM from 'react-dom';
import { useModalType } from 'store/modal';
import * as modal from './types';
import { AddProject } from './AddProject';
import { AddTag } from './AddTag';
import { AddWidget } from './AddWidget';
import { DeleteProject } from './DeleteProject';

const MODAL_COMPONENTS = {
  [modal.ADD_PROJECT]: AddProject,
  [modal.ADD_TAG]: AddTag,
  [modal.ADD_WIDGET]: AddWidget,
  [modal.DELETE_PROJECT]: DeleteProject,
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
