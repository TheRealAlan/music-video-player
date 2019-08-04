import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/shared/Modal';

import stylesheet from './OptionsModal.module.css';

function OptionsModal({ showModal, toggleModal }) {
  return (
    <Modal showModal={showModal} toggleModal={toggleModal}>
      <div className={stylesheet.options}>
        <h1>Options</h1>
      </div>
    </Modal>
  );
}

OptionsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default OptionsModal;
